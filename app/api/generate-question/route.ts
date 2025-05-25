import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { domain, prevQuestions, exampleQuestionsForDomain } = await req.json()
  const groqApiKey = process.env.GROQ_API_KEY

  if (!groqApiKey) {
    return NextResponse.json({ error: 'Missing GROQ_API_KEY' }, { status: 500 })
  }

  const randomSeed = Math.random().toString(36).substring(2, 10)
  const avoid = prevQuestions && prevQuestions.length
    ? `Avoid generating questions similar to these: ${prevQuestions.join(' | ')}.`
    : ''
  const prompt = `
Generate a unique, advanced, and less common multiple-choice question for the domain: ${domain}.
Do NOT ask 'What is X?' or other basic definition questions.
Ask something that would challenge someone who already knows the basics.
Here are examples of advanced questions for this domain:
${exampleQuestionsForDomain}
Avoid generating questions similar to these: ${prevQuestions.join(' | ')}.
Random seed: ${randomSeed}
Respond ONLY with valid JSON in this format: { "question": "...", "options": ["..."], "correctAnswer": 0, "explanation": "..." }
Do not include any text before or after the JSON.
`

  const groqRes = await fetch('https://api.groq.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${groqApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'mixtral-8x7b-32768',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 512,
      temperature: 0.7,
    }),
  })

  const data = await groqRes.json()
  let aiContent = data.choices?.[0]?.message?.content || '{}'

  // Log for debugging
  console.log('Groq response:', data)
  console.log('AI content:', aiContent)

  let questionObj
  try {
    questionObj = JSON.parse(aiContent)
  } catch {
    return NextResponse.json({ error: 'Failed to parse AI response', aiContent }, { status: 500 })
  }

  // Validate the structure
  if (!questionObj.question || !Array.isArray(questionObj.options) || typeof questionObj.correctAnswer !== 'number' || !questionObj.explanation) {
    return NextResponse.json({ error: 'AI response missing required fields', aiContent }, { status: 500 })
  }

  return NextResponse.json(questionObj)
} 