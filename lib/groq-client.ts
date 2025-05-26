import { createGroq } from "@ai-sdk/groq"

export const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY || "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",
})
