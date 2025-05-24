import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { groq } from "@/lib/groq-client"

export async function POST(request: NextRequest) {
  try {
    console.log("Voice chat request received")

    const { message, userId } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    console.log("Processing voice input with Groq AI:", message.substring(0, 100))

    // Optimized system prompt for voice interactions
    const systemPrompt = `You are an AI mentor optimized for voice interactions. Provide:

**Voice-Optimized Responses:**
- Keep responses concise but informative (2-3 sentences max for quick topics)
- Use conversational, natural language
- Avoid complex formatting or code blocks in voice responses
- Provide clear, actionable advice
- Ask follow-up questions to continue the conversation

**Expertise Areas:**
- Programming and software development
- IT career guidance and job market insights
- Interview preparation and technical skills
- Learning roadmaps and skill development

**Response Style:**
- Friendly and encouraging tone
- Practical, actionable advice
- Current industry insights
- Clear explanations without jargon

Respond as if you're having a natural conversation with a developer or IT professional.`

    const { text } = await generateText({
      model: groq("llama-3.1-8b-instant"), // Using the fast, reliable model for voice
      system: systemPrompt,
      prompt: message,
      maxTokens: 500, // Shorter for voice
      temperature: 0.6,
    })

    console.log("Voice response generated successfully")

    return NextResponse.json({
      response: text,
      model: "groq-llama-3.1-8b-instant",
      optimizedForVoice: true,
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error("Error with Groq voice AI:", error)

    // Voice-optimized fallback
    const fallbackResponse = generateVoiceFallback({ message: (await request.json()).message })

    return NextResponse.json({
      response: fallbackResponse,
      model: "fallback-voice",
      error: "Groq API temporarily unavailable",
      timestamp: new Date().toISOString(),
    })
  }
}

function generateVoiceFallback({ message }: { message: string }): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return "Hello! I'm your AI mentor. I can help you with programming, career advice, interview preparation, and technical guidance. What would you like to learn about today?"
  }

  if (lowerMessage.includes("code") || lowerMessage.includes("programming")) {
    return "I can help you with programming! I provide examples in JavaScript, Python, React, and many other technologies. I can also explain algorithms and best practices. What specific programming topic interests you?"
  }

  if (lowerMessage.includes("career") || lowerMessage.includes("job")) {
    return "Great question about career development! I can guide you on job search strategies, salary expectations, and skill development. The current tech market offers excellent opportunities. What specific career aspect would you like to explore?"
  }

  if (lowerMessage.includes("interview")) {
    return "Interview preparation is crucial! I can help you practice technical questions, behavioral interviews, and coding challenges. Focus on data structures and algorithms, and be ready to explain your projects. Would you like some practice questions?"
  }

  return "I'm here to help with your IT career journey! I can assist with programming questions, career advice, interview preparation, and learning roadmaps. What specific topic would you like to explore?"
}
