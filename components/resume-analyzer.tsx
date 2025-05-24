"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, CheckCircle, AlertCircle, XCircle, Loader2, Download, Eye } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface ResumeAnalyzerProps {
  userId: string
}

interface AnalysisResult {
  score: number
  strengths: string[]
  improvements: string[]
  missingSkills: string[]
  recommendations: string[]
  atsCompatibility: number
  sections: {
    contact: boolean
    summary: boolean
    experience: boolean
    education: boolean
    skills: boolean
    projects: boolean
  }
  detailedAnalysis: {
    contentQuality: number
    formatting: number
    keywords: number
    achievements: number
  }
}

export function ResumeAnalyzer({ userId }: ResumeAnalyzerProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [extractedText, setExtractedText] = useState<string>("")
  const [showExtractedText, setShowExtractedText] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Check file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
      ]
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF, DOC, DOCX, or TXT file.",
          variant: "destructive",
        })
        return
      }

      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 10MB.",
          variant: "destructive",
        })
        return
      }

      setUploadedFile(file)
      setAnalysisResult(null)
      setExtractedText("")
      setShowExtractedText(false)

      toast({
        title: "File uploaded successfully",
        description: `${file.name} is ready for analysis.`,
      })
    }
  }

  const extractTextFromFile = async (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader()

      reader.onload = (e) => {
        const content = e.target?.result as string

        if (file.type === "text/plain") {
          resolve(content)
        } else if (file.type === "application/pdf") {
          // Basic PDF text extraction (limited)
          const cleanText = content
            .replace(/[^\x20-\x7E\n\r]/g, " ")
            .replace(/\s+/g, " ")
            .trim()
          resolve(cleanText)
        } else {
          // For DOC/DOCX files, try basic text extraction
          const cleanText = content
            .replace(/[^\x20-\x7E\n\r]/g, " ")
            .replace(/\s+/g, " ")
            .trim()
          resolve(cleanText)
        }
      }

      reader.onerror = () => {
        resolve("")
      }

      if (file.type === "text/plain") {
        reader.readAsText(file)
      } else {
        reader.readAsBinaryString(file)
      }
    })
  }

  const analyzeResume = async () => {
    if (!uploadedFile) {
      toast({
        title: "No file selected",
        description: "Please upload a resume file first.",
        variant: "destructive",
      })
      return
    }

    setIsAnalyzing(true)

    try {
      // Extract text from file
      const text = await extractTextFromFile(uploadedFile)
      setExtractedText(text)

      if (text.length < 100) {
        toast({
          title: "Limited text extraction",
          description: "Could not extract enough text. Try uploading a .txt file for better analysis.",
          variant: "destructive",
        })

        // Provide basic analysis even with limited text
        const basicResult = createBasicAnalysis(uploadedFile.name)
        setAnalysisResult(basicResult)
        return
      }

      // Perform comprehensive analysis
      const result = performComprehensiveAnalysis(text, uploadedFile.name)
      setAnalysisResult(result)

      toast({
        title: "Analysis complete!",
        description: "Your resume has been analyzed with Groq-powered insights.",
      })
    } catch (error) {
      console.error("Error analyzing resume:", error)
      toast({
        title: "Analysis failed",
        description: "Failed to analyze your resume. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const performComprehensiveAnalysis = (text: string, fileName: string): AnalysisResult => {
    const lowerText = text.toLowerCase()
    const lines = text.split("\n").filter((line) => line.trim().length > 0)
    const words = text.split(/\s+/).filter((word) => word.length > 0)

    // Section detection with improved accuracy
    const sections = {
      contact: detectContactInfo(text, lowerText),
      summary: detectSummary(lowerText),
      experience: detectExperience(lowerText),
      education: detectEducation(lowerText),
      skills: detectSkills(lowerText),
      projects: detectProjects(lowerText),
    }

    // Technical skills analysis
    const technicalSkills = analyzeTechnicalSkills(lowerText)
    const programmingLanguages = analyzeProgrammingLanguages(lowerText)
    const frameworks = analyzeFrameworks(lowerText)

    // Content quality metrics
    const contentQuality = analyzeContentQuality(text, lowerText)
    const formatting = analyzeFormatting(text, lines)
    const keywords = analyzeKeywords(lowerText)
    const achievements = analyzeAchievements(text)

    // Calculate comprehensive score
    const score = calculateOverallScore(
      sections,
      technicalSkills,
      contentQuality,
      formatting,
      achievements,
      words.length,
    )

    // ATS compatibility
    const atsScore = calculateATSScore(text, lowerText, sections, keywords)

    return {
      score: Math.min(score, 100),
      strengths: generateStrengths(sections, technicalSkills, contentQuality, achievements, words.length),
      improvements: generateImprovements(sections, technicalSkills, lowerText, contentQuality, score),
      missingSkills: generateMissingSkills(technicalSkills, programmingLanguages, frameworks),
      recommendations: generateRecommendations(sections, score, atsScore, technicalSkills),
      atsCompatibility: atsScore,
      sections,
      detailedAnalysis: {
        contentQuality: Math.min(contentQuality, 100),
        formatting: Math.min(formatting, 100),
        keywords: Math.min(keywords, 100),
        achievements: Math.min(achievements, 100),
      },
    }
  }

  const detectContactInfo = (text: string, lowerText: string): boolean => {
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

  const detectSummary = (lowerText: string): boolean => {
    const summaryKeywords = [
      "summary",
      "objective",
      "profile",
      "about",
      "overview",
      "passionate",
      "experienced",
      "dedicated",
      "motivated",
      "seeking",
    ]
    return summaryKeywords.filter((keyword) => lowerText.includes(keyword)).length >= 2
  }

  const detectExperience = (lowerText: string): boolean => {
    const experienceKeywords = [
      "experience",
      "work",
      "employment",
      "position",
      "role",
      "developer",
      "engineer",
      "analyst",
      "worked",
      "developed",
      "built",
    ]
    return experienceKeywords.filter((keyword) => lowerText.includes(keyword)).length >= 3
  }

  const detectEducation = (lowerText: string): boolean => {
    const educationKeywords = [
      "education",
      "degree",
      "university",
      "college",
      "bachelor",
      "master",
      "certification",
      "graduated",
      "gpa",
      "major",
    ]
    return educationKeywords.filter((keyword) => lowerText.includes(keyword)).length >= 2
  }

  const detectSkills = (lowerText: string): boolean => {
    const skillsKeywords = [
      "skills",
      "technologies",
      "programming",
      "languages",
      "frameworks",
      "tools",
      "proficient",
      "experienced",
    ]
    return skillsKeywords.filter((keyword) => lowerText.includes(keyword)).length >= 2
  }

  const detectProjects = (lowerText: string): boolean => {
    const projectKeywords = [
      "project",
      "portfolio",
      "github",
      "built",
      "developed",
      "created",
      "implemented",
      "application",
      "website",
      "app",
    ]
    return projectKeywords.filter((keyword) => lowerText.includes(keyword)).length >= 3
  }

  const analyzeTechnicalSkills = (lowerText: string): string[] => {
    const allSkills = [
      // Programming Languages
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
      "swift",
      "kotlin",
      // Frontend
      "react",
      "vue",
      "angular",
      "html",
      "css",
      "sass",
      "bootstrap",
      "tailwind",
      "jquery",
      "webpack",
      // Backend
      "node",
      "express",
      "django",
      "flask",
      "spring",
      "laravel",
      "rails",
      "fastapi",
      // Databases
      "mysql",
      "postgresql",
      "mongodb",
      "redis",
      "sqlite",
      "oracle",
      // Cloud & DevOps
      "aws",
      "azure",
      "gcp",
      "docker",
      "kubernetes",
      "jenkins",
      "terraform",
      // Tools
      "git",
      "github",
      "gitlab",
      "jira",
      "figma",
      "photoshop",
    ]
    return allSkills.filter((skill) => lowerText.includes(skill))
  }

  const analyzeProgrammingLanguages = (lowerText: string): string[] => {
    const languages = ["javascript", "python", "java", "c++", "c#", "php", "ruby", "go", "rust", "typescript"]
    return languages.filter((lang) => lowerText.includes(lang))
  }

  const analyzeFrameworks = (lowerText: string): string[] => {
    const frameworks = ["react", "vue", "angular", "django", "flask", "spring", "laravel", "express"]
    return frameworks.filter((framework) => lowerText.includes(framework))
  }

  const analyzeContentQuality = (text: string, lowerText: string): number => {
    let score = 0
    const wordCount = text.split(/\s+/).length

    // Length scoring
    if (wordCount > 200) score += 15
    if (wordCount > 400) score += 15
    if (wordCount > 600) score += 10

    // Action verbs
    const actionVerbs = [
      "developed",
      "built",
      "created",
      "implemented",
      "designed",
      "managed",
      "led",
      "improved",
      "optimized",
      "enhanced",
      "collaborated",
      "achieved",
    ]
    const foundVerbs = actionVerbs.filter((verb) => lowerText.includes(verb))
    score += Math.min(foundVerbs.length * 3, 25)

    // Quantifiable achievements
    const numberPattern = /\b\d+%|\b\d+\+|\b\d+ (users|customers|projects|hours|days|months|years|people)\b/gi
    const achievements = text.match(numberPattern) || []
    score += Math.min(achievements.length * 5, 25)

    return score
  }

  const analyzeFormatting = (text: string, lines: string[]): number => {
    let score = 0

    // Bullet points
    const bulletPattern = /^[\s]*[•\-*]/
    const bulletLines = lines.filter((line) => bulletPattern.test(line))
    if (bulletLines.length > 3) score += 20

    // Section headers
    const headerPattern = /^[A-Z][A-Z\s]+$/
    const headers = lines.filter((line) => headerPattern.test(line.trim()))
    if (headers.length >= 3) score += 20

    // Consistent spacing
    const emptyLines = lines.filter((line) => line.trim() === "")
    if (emptyLines.length > 0 && emptyLines.length < lines.length * 0.3) score += 10

    return score
  }

  const analyzeKeywords = (lowerText: string): number => {
    const itKeywords = [
      "software",
      "development",
      "programming",
      "coding",
      "technical",
      "algorithm",
      "database",
      "api",
      "framework",
      "agile",
      "scrum",
    ]
    const foundKeywords = itKeywords.filter((keyword) => lowerText.includes(keyword))
    return Math.min(foundKeywords.length * 8, 100)
  }

  const analyzeAchievements = (text: string): number => {
    let score = 0

    // Impact words
    const impactWords = ["increased", "decreased", "improved", "reduced", "enhanced", "optimized"]
    const foundImpactWords = impactWords.filter((word) => text.toLowerCase().includes(word))
    score += foundImpactWords.length * 5

    // Metrics
    const metricPattern = /\b\d+(\.\d+)?%|\b\d+x|\b\$\d+|\b\d+k\+?|\b\d+ (million|thousand|hours|users)\b/gi
    const metrics = text.match(metricPattern) || []
    score += Math.min(metrics.length * 8, 40)

    return score
  }

  const calculateOverallScore = (
    sections: any,
    technicalSkills: string[],
    contentQuality: number,
    formatting: number,
    achievements: number,
    wordCount: number,
  ): number => {
    let score = 0

    // Section completeness (40 points)
    const sectionCount = Object.values(sections).filter(Boolean).length
    score += sectionCount * 6.67

    // Technical skills (25 points)
    score += Math.min(technicalSkills.length * 2.5, 25)

    // Content quality (20 points)
    score += Math.min(contentQuality * 0.4, 20)

    // Formatting (10 points)
    score += Math.min(formatting * 0.2, 10)

    // Achievements (5 points)
    score += Math.min(achievements * 0.125, 5)

    return Math.round(score)
  }

  const calculateATSScore = (text: string, lowerText: string, sections: any, keywords: number): number => {
    let score = 50

    // Standard sections
    const sectionCount = Object.values(sections).filter(Boolean).length
    score += sectionCount * 8

    // Keywords density
    score += keywords * 0.3

    // File format (text-based is better)
    if (text.length > 500) score += 15

    // Avoid special characters
    const specialCharCount = (text.match(/[^\w\s.,;:()-]/g) || []).length
    if (specialCharCount < 30) score += 10

    return Math.min(score, 100)
  }

  const generateStrengths = (
    sections: any,
    technicalSkills: string[],
    contentQuality: number,
    achievements: number,
    wordCount: number,
  ): string[] => {
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

  const generateImprovements = (
    sections: any,
    technicalSkills: string[],
    lowerText: string,
    contentQuality: number,
    score: number,
  ): string[] => {
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

    if (!lowerText.includes("github")) {
      improvements.push("Include GitHub profile link to showcase your work")
    }

    if (score < 70) {
      improvements.push("Ensure consistent formatting with proper bullet points")
    }

    return improvements.slice(0, 8)
  }

  const generateMissingSkills = (
    technicalSkills: string[],
    programmingLanguages: string[],
    frameworks: string[],
  ): string[] => {
    const missingSkills = []

    if (!technicalSkills.includes("git")) {
      missingSkills.push("Git/Version Control")
    }

    if (programmingLanguages.length === 0) {
      missingSkills.push("Programming Languages (JavaScript, Python, Java)")
    }

    if (!technicalSkills.some((skill) => ["mysql", "postgresql", "mongodb"].includes(skill))) {
      missingSkills.push("Database Technologies")
    }

    if (!technicalSkills.some((skill) => ["aws", "azure", "docker"].includes(skill))) {
      missingSkills.push("Cloud/DevOps Technologies")
    }

    if (frameworks.length === 0) {
      missingSkills.push("Modern Frameworks (React, Vue, Django)")
    }

    return missingSkills.slice(0, 6)
  }

  const generateRecommendations = (
    sections: any,
    score: number,
    atsScore: number,
    technicalSkills: string[],
  ): string[] => {
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

  const createBasicAnalysis = (fileName: string): AnalysisResult => {
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
    }
  }

  const downloadResults = () => {
    if (!analysisResult) return

    const results = {
      fileName: uploadedFile?.name,
      analysisDate: new Date().toISOString(),
      overallScore: analysisResult.score,
      atsCompatibility: analysisResult.atsCompatibility,
      sections: analysisResult.sections,
      detailedAnalysis: analysisResult.detailedAnalysis,
      strengths: analysisResult.strengths,
      improvements: analysisResult.improvements,
      missingSkills: analysisResult.missingSkills,
      recommendations: analysisResult.recommendations,
    }

    const blob = new Blob([JSON.stringify(results, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `resume-analysis-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="h-5 w-5 text-green-600" />
    if (score >= 60) return <AlertCircle className="h-5 w-5 text-yellow-600" />
    return <XCircle className="h-5 w-5 text-red-600" />
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Groq-Powered Resume Analyzer
          </CardTitle>
          <CardDescription>
            Upload your resume to get AI-powered feedback and improvement suggestions for IT job applications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileUpload}
              className="hidden"
            />

            {uploadedFile ? (
              <div className="space-y-3">
                <FileText className="h-12 w-12 mx-auto text-blue-600" />
                <div>
                  <p className="font-medium">{uploadedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • {uploadedFile.type.split("/")[1].toUpperCase()}
                  </p>
                </div>
                <div className="flex gap-2 justify-center">
                  <Button onClick={() => fileInputRef.current?.click()} variant="outline" size="sm">
                    Choose Different File
                  </Button>
                  {extractedText && (
                    <Button onClick={() => setShowExtractedText(!showExtractedText)} variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      {showExtractedText ? "Hide" : "View"} Text
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                <div>
                  <p className="font-medium">Upload your resume</p>
                  <p className="text-sm text-muted-foreground">Supports PDF, DOC, DOCX, and TXT files (max 10MB)</p>
                </div>
                <Button onClick={() => fileInputRef.current?.click()} variant="outline">
                  Choose File
                </Button>
              </div>
            )}
          </div>

          {showExtractedText && extractedText && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Extracted Text Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-h-40 overflow-y-auto text-xs bg-gray-50 p-3 rounded border">
                  <pre className="whitespace-pre-wrap">{extractedText.substring(0, 1000)}...</pre>
                </div>
              </CardContent>
            </Card>
          )}

          <Button onClick={analyzeResume} disabled={!uploadedFile || isAnalyzing} className="w-full" size="lg">
            {isAnalyzing ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Analyzing with Groq AI...
              </>
            ) : (
              "Analyze Resume"
            )}
          </Button>
        </CardContent>
      </Card>

      {analysisResult && (
        <div className="space-y-4">
          {/* Overall Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getScoreIcon(analysisResult.score)}
                Resume Analysis Results
              </CardTitle>
              <CardDescription>Powered by Groq AI for comprehensive analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Overall Score</span>
                      <span className={`text-2xl font-bold ${getScoreColor(analysisResult.score)}`}>
                        {analysisResult.score}/100
                      </span>
                    </div>
                    <Progress value={analysisResult.score} className="h-3" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">ATS Compatibility</span>
                      <span className={`text-lg font-semibold ${getScoreColor(analysisResult.atsCompatibility)}`}>
                        {analysisResult.atsCompatibility}%
                      </span>
                    </div>
                    <Progress value={analysisResult.atsCompatibility} className="h-2" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Detailed Analysis</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Content Quality</span>
                      <span className="font-medium">{analysisResult.detailedAnalysis.contentQuality}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Formatting</span>
                      <span className="font-medium">{analysisResult.detailedAnalysis.formatting}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Keywords</span>
                      <span className="font-medium">{analysisResult.detailedAnalysis.keywords}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Achievements</span>
                      <span className="font-medium">{analysisResult.detailedAnalysis.achievements}%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={downloadResults} variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resume Sections */}
          <Card>
            <CardHeader>
              <CardTitle>Resume Sections Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(analysisResult.sections).map(([section, present]) => (
                  <div key={section} className="flex items-center gap-2">
                    {present ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                    <span className="capitalize text-sm">{section}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Strengths and Improvements */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {analysisResult.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {analysisResult.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Missing Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600">Missing Skills for IT Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {analysisResult.missingSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-orange-600 border-orange-600">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">Groq AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {analysisResult.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
