"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle, Clock, RotateCcw, Download } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface AITestGeneratorProps {
  userId: string
}

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: "Easy" | "Medium" | "Hard"
  topic: string
}

interface TestSession {
  questions: Question[]
  currentQuestionIndex: number
  answers: Array<{
    questionId: string
    selectedAnswer: number
    isCorrect: boolean
    timeSpent: number
  }>
  startTime: Date
  timeLimit: number
  isActive: boolean
}

export function AITestGenerator({ userId }: AITestGeneratorProps) {
  const [selectedTopic, setSelectedTopic] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [questionCount, setQuestionCount] = useState("10")
  const [isGenerating, setIsGenerating] = useState(false)
  const [testSession, setTestSession] = useState<TestSession | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [timeRemaining, setTimeRemaining] = useState(0)

  const topics = [
    "Python Basics",
    "JavaScript Basics",
    "Data Structure and Algorithm",
    "Database Concepts",
    "System Design",
    "Web Development",
    "Cloud Computing",
    "DevOps Basics",
    "Cybersecurity",
    "Machine Learning Basics",
  ]

  const generateTest = async () => {
    if (!selectedTopic || !difficulty) {
      toast({
        title: "Missing information",
        description: "Please select a topic and difficulty level.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    try {
      console.log("Sending request to generate test...")
      const response = await fetch("/api/ai/generate-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: selectedTopic,
          difficulty,
          questionCount: Number.parseInt(questionCount),
          userId,
        }),
      })

      const data = await response.json()
      console.log("Response status:", response.status)
      console.log("Response data:", data)

      if (!response.ok) {
        throw new Error(data.error + (data.details ? `: ${data.details}` : ''))
      }

      if (!data.questions || !Array.isArray(data.questions)) {
        throw new Error("Invalid response format: missing questions array")
      }

      setTestSession({
        questions: data.questions,
        currentQuestionIndex: 0,
        answers: [],
        startTime: new Date(),
        timeLimit: Number.parseInt(questionCount) * 60, // 1 minute per question
        isActive: true,
      })

      setTimeRemaining(Number.parseInt(questionCount) * 60)
      startTimer()

      toast({
        title: "Test generated!",
        description: `Your ${selectedTopic} test is ready. Good luck!`,
      })
    } catch (error) {
      console.error("Error generating test:", error)
      toast({
        title: "Generation failed",
        description: error instanceof Error ? error.message : "Could not generate the test. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const startTimer = () => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          submitTest()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const submitAnswer = () => {
    if (!testSession || selectedAnswer === null) {
      toast({
        title: "No answer selected",
        description: "Please select an answer before proceeding.",
        variant: "destructive",
      })
      return
    }

    const currentQuestion = testSession.questions[testSession.currentQuestionIndex]
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    const timeSpent = 60 - (timeRemaining % 60)

    const newAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      timeSpent,
    }

    const updatedSession = {
      ...testSession,
      answers: [...testSession.answers, newAnswer],
    }

    if (testSession.currentQuestionIndex < testSession.questions.length - 1) {
      setTestSession({
        ...updatedSession,
        currentQuestionIndex: testSession.currentQuestionIndex + 1,
      })
      setSelectedAnswer(null)
    } else {
      setTestSession({
        ...updatedSession,
        isActive: false,
      })
      toast({
        title: "Test completed!",
        description: "Great job! Check your results below.",
      })
    }
  }

  const submitTest = () => {
    if (testSession) {
      setTestSession({
        ...testSession,
        isActive: false,
      })
    }
  }

  const resetTest = () => {
    setTestSession(null)
    setSelectedAnswer(null)
    setTimeRemaining(0)
  }

  const getScore = () => {
    if (!testSession || testSession.answers.length === 0) return 0
    const correctAnswers = testSession.answers.filter((answer) => answer.isCorrect).length
    return Math.round((correctAnswers / testSession.answers.length) * 100)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const downloadResults = () => {
    if (!testSession) return

    const results = {
      topic: selectedTopic,
      difficulty,
      score: getScore(),
      totalQuestions: testSession.questions.length,
      correctAnswers: testSession.answers.filter((a) => a.isCorrect).length,
      timeSpent: testSession.timeLimit - timeRemaining,
      answers: testSession.answers.map((answer, index) => ({
        question: testSession.questions[index].question,
        selectedAnswer: testSession.questions[index].options[answer.selectedAnswer],
        correctAnswer: testSession.questions[index].options[testSession.questions[index].correctAnswer],
        isCorrect: answer.isCorrect,
        explanation: testSession.questions[index].explanation,
      })),
    }

    const blob = new Blob([JSON.stringify(results, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `test-results-${selectedTopic}-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!testSession) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>AI Test Generator</CardTitle>
          <CardDescription>
            Generate personalized technical tests to assess your knowledge and prepare for interviews.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Topic</Label>
              <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                <SelectTrigger>
                  <SelectValue placeholder="Select topic" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((topic) => (
                    <SelectItem key={topic} value={topic}>
                      {topic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Difficulty</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Number of Questions</Label>
              <Select value={questionCount} onValueChange={setQuestionCount}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 Questions</SelectItem>
                  <SelectItem value="10">10 Questions</SelectItem>
                  <SelectItem value="15">15 Questions</SelectItem>
                  <SelectItem value="20">20 Questions</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Test Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• AI-generated questions based on your selected topic</li>
              <li>• Multiple choice format with detailed explanations</li>
              <li>• Timed test with automatic submission</li>
              <li>• Instant feedback and scoring</li>
              <li>• Downloadable results for review</li>
            </ul>
          </div>

          <Button
            onClick={generateTest}
            disabled={isGenerating || !selectedTopic || !difficulty}
            className="w-full"
            size="lg"
          >
            {isGenerating ? "Generating Test..." : "Generate Test"}
          </Button>
        </CardContent>
      </Card>
    )
  }

  const currentQuestion = testSession.questions[testSession.currentQuestionIndex]
  const progress =
    ((testSession.currentQuestionIndex + (testSession.isActive ? 0 : 1)) / testSession.questions.length) * 100

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>{selectedTopic} Test</CardTitle>
              <CardDescription>
                Question {testSession.currentQuestionIndex + 1} of {testSession.questions.length}
              </CardDescription>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className={`font-mono text-lg ${timeRemaining < 60 ? "text-red-600" : ""}`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
              <Button onClick={resetTest} variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
      </Card>

      {testSession.isActive && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Badge
                variant={
                  currentQuestion.difficulty === "Easy"
                    ? "default"
                    : currentQuestion.difficulty === "Medium"
                      ? "secondary"
                      : "destructive"
                }
              >
                {currentQuestion.difficulty}
              </Badge>
              <Badge variant="outline">{currentQuestion.topic}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Question {testSession.currentQuestionIndex + 1}:</h3>
              <p>{currentQuestion.question}</p>
            </div>

            <RadioGroup
              value={selectedAnswer?.toString()}
              onValueChange={(value) => setSelectedAnswer(Number.parseInt(value))}
            >
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <Button onClick={submitAnswer} disabled={selectedAnswer === null} className="w-full">
              {testSession.currentQuestionIndex === testSession.questions.length - 1 ? "Finish Test" : "Next Question"}
            </Button>
          </CardContent>
        </Card>
      )}

      {!testSession.isActive && testSession.answers.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Test Results
                </CardTitle>
                <CardDescription>
                  Score: {getScore()}% ({testSession.answers.filter((a) => a.isCorrect).length}/
                  {testSession.questions.length} correct)
                </CardDescription>
              </div>
              <Button onClick={downloadResults} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Results
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {testSession.answers.map((answer, index) => {
                const question = testSession.questions[index]
                return (
                  <div key={answer.questionId} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Question {index + 1}</h4>
                      {answer.isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <p className="text-sm mb-2">{question.question}</p>
                    <div className="space-y-1 text-sm">
                      <p>
                        Your answer:{" "}
                        <span className={answer.isCorrect ? "text-green-600" : "text-red-600"}>
                          {question.options[answer.selectedAnswer]}
                        </span>
                      </p>
                      {!answer.isCorrect && (
                        <p>
                          Correct answer:{" "}
                          <span className="text-green-600">{question.options[question.correctAnswer]}</span>
                        </p>
                      )}
                      <p className="text-muted-foreground">{question.explanation}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button onClick={resetTest} className="w-full">
              Take Another Test
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
