import { createGroq } from "@ai-sdk/groq"

export const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY || "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",
})
