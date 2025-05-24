import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { groq } from "@/lib/groq-client"

export async function POST(request: NextRequest) {
  try {
    console.log("Resume analysis request received")

    const formData = await request.formData()
    const file = formData.get("resume") as File
    const userId = formData.get("userId") as string

    console.log("File received:", file?.name, file?.type, file?.size)

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Extract text from file
    let resumeText = ""

    try {
      if (file.type === "text/plain") {
        resumeText = await file.text()
      } else if (file.type === "application/pdf") {
        const buffer = await file.arrayBuffer()
        const text = new TextDecoder("utf-8", { fatal: false }).decode(buffer)
        resumeText = text.replace(/[^\x20-\x7E\n\r]/g, " ").trim()
      } else {
        const buffer = await file.arrayBuffer()
        const text = new TextDecoder("utf-8", { fatal: false }).decode(buffer)
        resumeText = text.replace(/[^\x20-\x7E\n\r]/g, " ").trim()
      }

      console.log("Extracted text length:", resumeText.length)

      if (resumeText.length < 100) {
        return NextResponse.json(createBasicResumeAnalysis(file.name))
      }

      // Use Groq AI for comprehensive resume analysis
      const analysisResult = await analyzeResumeWithGroq(resumeText, file.name)

      console.log("Resume analysis completed with Groq AI")
      return NextResponse.json(analysisResult)
    } catch (textError) {
      console.error("Error extracting text:", textError)
      return NextResponse.json(createBasicResumeAnalysis(file.name))
    }
  } catch (error: any) {
    console.error("Error analyzing resume:", error)
    return NextResponse.json(createBasicResumeAnalysis("unknown"))
  }
}

async function analyzeResumeWithGroq(resumeText: string, fileName: string) {
  const fallbackModels = ["llama-3.3-70b-versatile", "llama-3.1-8b-instant", "mixtral-8x7b-32768", "gemma2-9b-it"]

  for (const modelName of fallbackModels) {
    try {
      console.log(`Trying resume analysis with model: ${modelName}`)

      const systemPrompt = `You are an expert resume analyzer and career coach specializing in IT and technology roles. Analyze the provided resume and return a JSON response with the following structure:

{
  "score": number (0-100),
  "atsCompatibility": number (0-100),
  "sections": {
    "contact": boolean,
    "summary": boolean,
    "experience": boolean,
    "education": boolean,
    "skills": boolean,
    "projects": boolean
  },
  "strengths": ["strength1", "strength2", ...],
  "improvements": ["improvement1", "improvement2", ...],
  "missingSkills": ["skill1", "skill2", ...],
  "recommendations": ["recommendation1", "recommendation2", ...]
}

**Analysis Criteria:**
- **Score**: Overall resume quality (content, structure, relevance)
- **ATS Compatibility**: How well it works with Applicant Tracking Systems
- **Sections**: Presence of essential resume sections
- **Strengths**: What the resume does well
- **Improvements**: Specific areas that need work
- **Missing Skills**: Important IT skills not mentioned
- **Recommendations**: Actionable advice for improvement

**Focus on:**
- Technical skills relevance for IT roles
- Project descriptions and achievements
- Professional experience quality
- Education and certifications
- Contact information completeness
- ATS-friendly formatting
- Quantified achievements and impact

Provide specific, actionable feedback for IT job applications.`

      const { text } = await generateText({
        model: groq(modelName),
        system: systemPrompt,
        prompt: `Analyze this resume for IT job applications:\n\n${resumeText}`,
        maxTokens: 2000,
        temperature: 0.3,
      })

      // Parse the JSON response
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        const analysis = JSON.parse(jsonMatch[0])

        // Add detailed analysis breakdown
        analysis.detailedAnalysis = {
          contentQuality: Math.min(analysis.score * 0.8, 100),
          formatting: Math.min(analysis.atsCompatibility * 0.9, 100),
          keywords: Math.min(analysis.score * 0.7, 100),
          achievements: Math.min(analysis.score * 0.6, 100),
        }

        analysis.model = `groq-${modelName}`
        return analysis
      } else {
        throw new Error("Invalid JSON response from Groq")
      }
    } catch (error) {
      console.error(`Model ${modelName} failed:`, error.message)
      continue
    }
  }

  // If all models fail, use fallback analysis
  console.log("All Groq models failed, using fallback analysis")
  return createComprehensiveResumeAnalysis(resumeText, fileName)
}

function createComprehensiveResumeAnalysis(resumeText: string, fileName: string) {
  const text = resumeText.toLowerCase()
  const lines = resumeText.split("\n").filter((line) => line.trim().length > 0)
  const words = resumeText.split(/\s+/).filter((word) => word.length > 0)

  // Section detection
  const sections = {
    contact: detectContactInfo(resumeText, text),
    summary: detectSummary(text),
    experience: detectExperience(text),
    education: detectEducation(text),
    skills: detectSkills(text),
    projects: detectProjects(text),
  }

  // Technical skills analysis
  const technicalSkills = analyzeTechnicalSkills(text)
  const contentQuality = analyzeContentQuality(resumeText, text)
  const formatting = analyzeFormatting(resumeText, lines)
  const achievements = analyzeAchievements(resumeText)

  // Calculate scores
  const score = calculateOverallScore(sections, technicalSkills, contentQuality, formatting, achievements, words.length)
  const atsScore = calculateATSScore(resumeText, text, sections)

  return {
    score: Math.min(score, 100),
    strengths: generateStrengths(sections, technicalSkills, contentQuality, achievements, words.length),
    improvements: generateImprovements(sections, technicalSkills, text, contentQuality, score),
    missingSkills: generateMissingSkills(technicalSkills),
    recommendations: generateRecommendations(sections, score, atsScore, technicalSkills),
    atsCompatibility: atsScore,
    sections,
    detailedAnalysis: {
      contentQuality: Math.min(contentQuality, 100),
      formatting: Math.min(formatting, 100),
      keywords: Math.min(technicalSkills.length * 8, 100),
      achievements: Math.min(achievements, 100),
    },
    model: "fallback-analysis",
  }
}

// Helper functions (keeping the existing ones but optimized)
function detectContactInfo(text: string, lowerText: string): boolean {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
  const phonePattern = /(\+?1[-.\s]?)?($$)?[0-9]{3}($$)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/
  const linkedinPattern = /linkedin\.com\/in\/|linkedin\.com\/pub\//
  const githubPattern = /github\.com\/[a-zA-Z0-9-]+/

  const hasEmail = emailPattern.test(text)
  const hasPhone = phonePattern.test(text)
  const hasLinkedIn = linkedinPattern.test(lowerText)
  const hasGitHub = githubPattern.test(lowerText)

  return [hasEmail, hasPhone, hasLinkedIn, hasGitHub].filter(Boolean).length >= 2
}

function detectSummary(text: string): boolean {
  const summaryKeywords = ["summary", "objective", "profile", "about", "overview", "passionate", "experienced"]
  return summaryKeywords.filter((keyword) => text.includes(keyword)).length >= 2
}

function detectExperience(text: string): boolean {
  const experienceKeywords = [
    "experience",
    "work",
    "employment",
    "position",
    "developer",
    "engineer",
    "worked",
    "developed",
    "built",
  ]
  return experienceKeywords.filter((keyword) => text.includes(keyword)).length >= 3
}

function detectEducation(text: string): boolean {
  const educationKeywords = [
    "education",
    "degree",
    "university",
    "college",
    "bachelor",
    "master",
    "certification",
    "graduated",
  ]
  return educationKeywords.filter((keyword) => text.includes(keyword)).length >= 2
}

function detectSkills(text: string): boolean {
  const skillsKeywords = ["skills", "technologies", "programming", "languages", "frameworks", "tools", "proficient"]
  return skillsKeywords.filter((keyword) => text.includes(keyword)).length >= 2
}

function detectProjects(text: string): boolean {
  const projectKeywords = [
    "project",
    "portfolio",
    "github",
    "built",
    "developed",
    "created",
    "implemented",
    "application",
  ]
  return projectKeywords.filter((keyword) => text.includes(keyword)).length >= 3
}

function analyzeTechnicalSkills(text: string): string[] {
  const skills = [
    "javascript",
    "python",
    "java",
    "c++",
    "c#",
    "php",
    "ruby",
    "go",
    "rust",
    "typescript",
    "react",
    "vue",
    "angular",
    "html",
    "css",
    "sass",
    "bootstrap",
    "tailwind",
    "node",
    "express",
    "django",
    "flask",
    "spring",
    "laravel",
    "rails",
    "mysql",
    "postgresql",
    "mongodb",
    "redis",
    "sqlite",
    "aws",
    "azure",
    "gcp",
    "docker",
    "kubernetes",
    "jenkins",
    "git",
    "github",
    "gitlab",
    "jira",
    "figma",
  ]
  return skills.filter((skill) => text.includes(skill))
}

function analyzeContentQuality(text: string, lowerText: string): number {
  let score = 0
  const wordCount = text.split(/\s+/).length

  if (wordCount > 200) score += 15
  if (wordCount > 400) score += 15
  if (wordCount > 600) score += 10

  const actionVerbs = ["developed", "built", "created", "implemented", "designed", "managed", "led", "improved"]
  const foundVerbs = actionVerbs.filter((verb) => lowerText.includes(verb))
  score += Math.min(foundVerbs.length * 3, 25)

  const numberPattern = /\b\d+%|\b\d+\+|\b\d+ (users|customers|projects|hours|days|months|years)\b/gi
  const achievements = text.match(numberPattern) || []
  score += Math.min(achievements.length * 5, 25)

  return score
}

function analyzeFormatting(text: string, lines: string[]): number {
  let score = 0

  const bulletPattern = /^[\s]*[•\-*]/
  const bulletLines = lines.filter((line) => bulletPattern.test(line))
  if (bulletLines.length > 3) score += 20

  const headerPattern = /^[A-Z][A-Z\s]+$/
  const headers = lines.filter((line) => headerPattern.test(line.trim()))
  if (headers.length >= 3) score += 20

  return score
}

function analyzeAchievements(text: string): number {
  let score = 0

  const impactWords = ["increased", "decreased", "improved", "reduced", "enhanced", "optimized"]
  const foundImpactWords = impactWords.filter((word) => text.toLowerCase().includes(word))
  score += foundImpactWords.length * 5

  const metricPattern = /\b\d+(\.\d+)?%|\b\d+x|\b\$\d+|\b\d+k\+?|\b\d+ (million|thousand|hours|users)\b/gi
  const metrics = text.match(metricPattern) || []
  score += Math.min(metrics.length * 8, 40)

  return score
}

function calculateOverallScore(
  sections: any,
  technicalSkills: string[],
  contentQuality: number,
  formatting: number,
  achievements: number,
  wordCount: number,
): number {
  let score = 0

  const sectionCount = Object.values(sections).filter(Boolean).length
  score += sectionCount * 6.67

  score += Math.min(technicalSkills.length * 2.5, 25)
  score += Math.min(contentQuality * 0.4, 20)
  score += Math.min(formatting * 0.2, 10)
  score += Math.min(achievements * 0.125, 5)

  return Math.round(score)
}

function calculateATSScore(text: string, lowerText: string, sections: any): number {
  let score = 50

  const sectionCount = Object.values(sections).filter(Boolean).length
  score += sectionCount * 8

  if (text.length > 500) score += 15

  const specialCharCount = (text.match(/[^\w\s.,;:()-]/g) || []).length
  if (specialCharCount < 30) score += 10

  return Math.min(score, 100)
}

function generateStrengths(
  sections: any,
  technicalSkills: string[],
  contentQuality: number,
  achievements: number,
  wordCount: number,
): string[] {
  const strengths = []

  if (sections.contact) strengths.push("Complete contact information with professional links")
  if (sections.summary) strengths.push("Professional summary effectively highlights qualifications")
  if (sections.experience) strengths.push("Work experience demonstrates career progression")
  if (sections.skills) strengths.push("Technical skills section showcases relevant expertise")
  if (sections.projects) strengths.push("Project portfolio demonstrates practical application")

  if (technicalSkills.length > 8) {
    strengths.push("Extensive technical skill set covering multiple technologies")
  } else if (technicalSkills.length > 4) {
    strengths.push("Good variety of technical skills relevant to IT roles")
  }

  if (contentQuality > 40) {
    strengths.push("Strong use of action verbs and quantified achievements")
  }

  if (wordCount > 400) {
    strengths.push("Comprehensive content with detailed descriptions")
  }

  return strengths.length > 0 ? strengths : ["Resume shows basic organization and structure"]
}

function generateImprovements(
  sections: any,
  technicalSkills: string[],
  text: string,
  contentQuality: number,
  score: number,
): string[] {
  const improvements = []

  if (!sections.contact) improvements.push("Add comprehensive contact information (email, phone, LinkedIn, GitHub)")
  if (!sections.summary) improvements.push("Include a compelling professional summary")
  if (!sections.experience) improvements.push("Add detailed work experience with accomplishments")
  if (!sections.skills) improvements.push("Create a comprehensive technical skills section")
  if (!sections.projects) improvements.push("Add 2-3 detailed project descriptions")

  if (technicalSkills.length < 5) {
    improvements.push("Expand technical skills with more relevant technologies")
  }

  if (contentQuality < 30) {
    improvements.push("Use more action verbs and quantify achievements")
  }

  if (!text.includes("github")) {
    improvements.push("Include GitHub profile link to showcase your work")
  }

  return improvements.slice(0, 8)
}

function generateMissingSkills(technicalSkills: string[]): string[] {
  const missingSkills = []

  if (!technicalSkills.includes("git")) {
    missingSkills.push("Git/Version Control")
  }

  if (!technicalSkills.some((skill) => ["javascript", "python", "java"].includes(skill))) {
    missingSkills.push("Programming Languages (JavaScript, Python, Java)")
  }

  if (!technicalSkills.some((skill) => ["mysql", "postgresql", "mongodb"].includes(skill))) {
    missingSkills.push("Database Technologies")
  }

  if (!technicalSkills.some((skill) => ["aws", "azure", "docker"].includes(skill))) {
    missingSkills.push("Cloud/DevOps Technologies")
  }

  if (!technicalSkills.some((skill) => ["react", "vue", "angular"].includes(skill))) {
    missingSkills.push("Modern Frameworks (React, Vue, Angular)")
  }

  return missingSkills.slice(0, 6)
}

function generateRecommendations(sections: any, score: number, atsScore: number, technicalSkills: string[]): string[] {
  const recommendations = []

  if (score < 60) {
    recommendations.push("Focus on completing all essential resume sections")
  }

  recommendations.push("Add 2-3 substantial technical projects with GitHub links")
  recommendations.push("Include specific programming languages and frameworks")
  recommendations.push("Use strong action verbs to start each bullet point")
  recommendations.push("Quantify achievements with specific metrics and numbers")

  if (atsScore < 70) {
    recommendations.push("Optimize for ATS systems with standard section headers")
  }

  recommendations.push("Ensure consistent formatting throughout the document")
  recommendations.push("Tailor resume content for each job application")

  return recommendations.slice(0, 8)
}

function createBasicResumeAnalysis(fileName: string) {
  return {
    score: 35,
    strengths: ["File uploaded successfully"],
    improvements: [
      "Could not extract sufficient text from the file",
      "Try uploading a plain text (.txt) version",
      "Ensure the file contains readable, selectable text",
      "Consider using a simpler file format",
    ],
    missingSkills: [
      "Unable to detect technical skills",
      "Programming languages not identified",
      "Framework experience unclear",
    ],
    recommendations: [
      "Upload a text-based version (.txt, .docx) for detailed analysis",
      "Include clear sections: Contact, Summary, Skills, Experience, Projects",
      "Add specific technical skills and programming languages",
      "Use standard formatting with clear section headers",
    ],
    atsCompatibility: 25,
    sections: {
      contact: false,
      summary: false,
      experience: false,
      education: false,
      skills: false,
      projects: false,
    },
    detailedAnalysis: {
      contentQuality: 20,
      formatting: 15,
      keywords: 10,
      achievements: 5,
    },
    model: "fallback-analysis",
  }
}
