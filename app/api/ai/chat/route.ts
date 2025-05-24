import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { groq } from "@/lib/groq-client"

export async function POST(request: NextRequest) {
  try {
    console.log("Chat request received")

    const { message, userId, context } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    console.log("Generating response with Groq AI for:", message.substring(0, 100))

    // Create context-aware system prompt
    const systemPrompt = `You are an expert AI mentor specializing in IT career guidance, programming, and technical education. You provide:

1. **Programming Help**: Code examples, debugging, best practices, architecture advice
2. **Career Guidance**: Job search strategies, salary insights, skill development, industry trends
3. **Interview Preparation**: Technical questions, behavioral prep, coding challenges, system design
4. **Learning Roadmaps**: Structured learning paths, resource recommendations, certification guidance
5. **Resume & Portfolio**: Optimization tips, project ideas, professional presentation

**Response Style:**
- Be comprehensive but concise
- Include practical examples and code snippets when relevant
- Provide actionable advice with specific steps
- Use current industry standards and best practices
- Include salary ranges and market insights when discussing careers
- Format responses with clear sections using markdown

**Current Context**: ${context || "General IT mentorship"}

Respond as a knowledgeable, supportive mentor who helps developers and IT professionals advance their careers.`

    const { text } = await generateText({
      model: groq("llama-3.1-8b-instant"), // Updated to current supported model
      system: systemPrompt,
      prompt: message,
      maxTokens: 2000,
      temperature: 0.7,
    })

    console.log("Groq AI response generated successfully")

    return NextResponse.json({
      response: text,
      model: "groq-llama-3.1-8b-instant",
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error("Error with Groq AI:", error)

    // Check if it's a model deprecation error
    if (error.message?.includes("decommissioned") || error.message?.includes("deprecated")) {
      console.log("Model deprecated, trying alternative models...")

      // Try alternative models in order of preference
      const fallbackModels = ["llama-3.3-70b-versatile", "llama-3.1-8b-instant", "mixtral-8x7b-32768", "gemma2-9b-it"]

      for (const modelName of fallbackModels) {
        try {
          console.log(`Trying fallback model: ${modelName}`)

          const { text } = await generateText({
            model: groq(modelName),
            system: `You are an expert AI mentor specializing in IT career guidance, programming, and technical education. Provide comprehensive, actionable advice for developers and IT professionals.`,
            prompt: message,
            maxTokens: 1500,
            temperature: 0.7,
          })

          return NextResponse.json({
            response: text,
            model: `groq-${modelName}`,
            timestamp: new Date().toISOString(),
            note: `Using ${modelName} model`,
          })
        } catch (fallbackError: any) {
          console.error(`Fallback model ${modelName} failed:`, fallbackError.message)
          continue
        }
      }
    }

    // If all models fail, use intelligent fallback
    const fallbackResponse = generateIntelligentFallback({ message })

    return NextResponse.json({
      response: fallbackResponse,
      model: "fallback",
      error: "Groq API temporarily unavailable - using intelligent fallback",
      timestamp: new Date().toISOString(),
    })
  }
}

function generateIntelligentFallback({ message }: { message: string }): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("code") || lowerMessage.includes("programming")) {
    return `**🔥 Programming Guidance:**

I can help you with programming! Here are some key areas I specialize in:

**Popular Technologies & Frameworks:**
• **JavaScript/TypeScript** - React, Node.js, Express, Next.js, Vue.js
• **Python** - Django, Flask, FastAPI, Data Science, Machine Learning
• **Java** - Spring Boot, Maven, Enterprise applications
• **Go** - Microservices, APIs, High-performance systems
• **C#** - .NET Core, ASP.NET, Entity Framework

**💡 What I can help with:**
• Code reviews and optimization techniques
• Architecture design patterns and best practices
• Debugging strategies and troubleshooting
• Performance optimization and scaling
• Testing strategies (unit, integration, e2e)
• API design and development

**🚀 Popular Questions:**
- "Show me a React component with hooks example"
- "How to optimize database queries in Python"
- "Best practices for REST API design"
- "Microservices architecture patterns"
- "How to implement authentication in Node.js"

What specific programming topic would you like help with?`
  }

  if (lowerMessage.includes("career") || lowerMessage.includes("job") || lowerMessage.includes("salary")) {
    return `**🎯 IT Career Guidance (2024 Market Data):**

**💰 Current Salary Ranges (USD - Remote/US Market):**
• **Frontend Developer**: $65,000 - $140,000
  - React/Vue/Angular specialist: +$10-20k premium
  - TypeScript expertise: High demand
• **Backend Developer**: $70,000 - $150,000
  - Node.js/Python/Java: Core technologies
  - Microservices experience: +$15k premium
• **Full-Stack Developer**: $75,000 - $160,000
  - MEAN/MERN stack: Most popular
  - Next.js/Nuxt.js: Growing demand
• **DevOps Engineer**: $85,000 - $170,000
  - AWS/Azure/GCP: Essential skills
  - Kubernetes/Docker: Industry standard
• **Data Engineer**: $90,000 - $180,000
  - Python/Scala + Big Data tools
• **AI/ML Engineer**: $100,000 - $200,000
  - LLM integration experience

**🚀 Career Advancement Tips:**
1. Build a strong GitHub portfolio with diverse projects
2. Contribute to open source projects in your field
3. Stay updated with latest technologies and frameworks
4. Network within tech communities (Discord, Reddit, LinkedIn)
5. Obtain relevant certifications (AWS, Azure, Kubernetes)

**📈 High-Demand Skills for 2024:**
• Cloud platforms (AWS, Azure, GCP)
• Containerization (Docker, Kubernetes)
• AI/ML integration and prompt engineering
• Cybersecurity and secure coding practices
• Mobile development (React Native, Flutter)

What specific career aspect would you like to explore?`
  }

  if (lowerMessage.includes("interview") || lowerMessage.includes("prepare")) {
    return `**🎯 Interview Preparation Guide:**

**Technical Interview Types:**
• **Coding Challenges** - Data structures, algorithms, problem-solving
• **System Design** - Architecture, scalability, trade-offs
• **Behavioral Questions** - STAR method, past experiences
• **Technical Deep Dive** - Specific technology expertise

**🔥 Common Technical Questions:**
• "Explain the difference between var, let, and const in JavaScript"
• "How would you design a URL shortener like bit.ly?"
• "What's the difference between SQL and NoSQL databases?"
• "Explain REST vs GraphQL APIs"
• "How do you handle state management in React?"

**💡 Preparation Strategy:**
1. **Practice Coding** - LeetCode, HackerRank, CodeSignal
2. **System Design** - Study scalable architectures
3. **Behavioral Prep** - Prepare STAR format stories
4. **Company Research** - Understand their tech stack
5. **Mock Interviews** - Practice with peers or platforms

**📚 Key Topics to Review:**
• Data Structures: Arrays, Objects, Trees, Graphs
• Algorithms: Sorting, Searching, Dynamic Programming
• Databases: SQL queries, indexing, normalization
• Web Technologies: HTTP, REST APIs, Authentication
• Cloud Services: Basic AWS/Azure concepts

Would you like me to dive deeper into any specific interview topic?`
  }

  if (lowerMessage.includes("learn") || lowerMessage.includes("roadmap") || lowerMessage.includes("study")) {
    return `**📚 Learning Roadmap for IT Professionals:**

**🚀 Frontend Development Path:**
1. **Fundamentals** - HTML5, CSS3, JavaScript ES6+
2. **Framework** - React.js or Vue.js
3. **Styling** - Tailwind CSS or Styled Components
4. **State Management** - Redux, Zustand, or Context API
5. **Build Tools** - Vite, Webpack, or Parcel
6. **Testing** - Jest, React Testing Library

**⚙️ Backend Development Path:**
1. **Language** - Node.js, Python, or Java
2. **Framework** - Express.js, Django, or Spring Boot
3. **Database** - PostgreSQL, MongoDB, or MySQL
4. **API Design** - REST, GraphQL
5. **Authentication** - JWT, OAuth, Sessions
6. **Deployment** - Docker, AWS, or Vercel

**☁️ DevOps & Cloud Path:**
1. **Version Control** - Git, GitHub/GitLab
2. **Containerization** - Docker, Docker Compose
3. **Cloud Platform** - AWS, Azure, or GCP
4. **CI/CD** - GitHub Actions, Jenkins
5. **Orchestration** - Kubernetes
6. **Monitoring** - Prometheus, Grafana

**🎯 Learning Tips:**
• Build projects while learning concepts
• Join developer communities and forums
• Follow industry blogs and newsletters
• Practice coding challenges regularly
• Contribute to open source projects

What specific technology path interests you most?`
  }

  return `**🤖 AI Mentor - Temporarily Using Fallback Mode**

I'm your comprehensive IT career mentor! While I'm currently using a fallback system, I can still help you with:

**💻 Technical Expertise:**
• Programming languages and frameworks
• System design and architecture
• Code optimization and best practices
• Debugging and troubleshooting strategies

**🎯 Career Development:**
• Job search strategies and market insights
• Interview preparation (technical & behavioral)
• Salary negotiation and career progression
• Skill development roadmaps

**📚 Learning Guidance:**
• Technology learning paths and resources
• Certification recommendations
• Project ideas for portfolio building
• Industry trends and emerging technologies

**🔥 Popular Topics:**
• "Show me React best practices"
• "How to prepare for senior developer interviews"
• "What's the best tech stack for 2024?"
• "Career transition from frontend to full-stack"
• "How to negotiate a higher salary"

**Ask me anything about:**
- Programming and software development
- Career advice and job market trends
- Interview preparation and technical skills
- Learning roadmaps and skill development

What would you like to explore today?`
}
