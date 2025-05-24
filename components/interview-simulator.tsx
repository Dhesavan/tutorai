"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Mic, MicOff, RotateCcw, CheckCircle, Clock, Loader2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface InterviewSimulatorProps {
  userId: string
}

interface Question {
  id: string
  question: string
  category: string
  difficulty: "Easy" | "Medium" | "Hard"
  expectedPoints: string[]
  timeLimit: number
}

interface InterviewSession {
  questions: Question[]
  currentQuestionIndex: number
  answers: Array<{
    questionId: string
    answer: string
    timeSpent: number
    score: number
  }>
  startTime: Date
  isActive: boolean
}

const interviewQuestions: Record<string, Question[]> = {
  frontend: [
    {
      id: "fe1",
      question: "What is the difference between let, const, and var in JavaScript?",
      category: "JavaScript Fundamentals",
      difficulty: "Easy",
      expectedPoints: [
        "Block scope vs function scope",
        "Hoisting behavior",
        "Reassignment rules",
        "Temporal dead zone",
      ],
      timeLimit: 180,
    },
    {
      id: "fe2",
      question: "Explain the concept of React hooks and give examples of commonly used hooks.",
      category: "React",
      difficulty: "Medium",
      expectedPoints: ["useState for state management", "useEffect for side effects", "Custom hooks", "Rules of hooks"],
      timeLimit: 300,
    },
    {
      id: "fe3",
      question: "How would you optimize the performance of a React application?",
      category: "React Performance",
      difficulty: "Hard",
      expectedPoints: ["React.memo", "useMemo and useCallback", "Code splitting", "Virtual DOM optimization"],
      timeLimit: 420,
    },
  ],
  backend: [
    {
      id: "be1",
      question: "What is the difference between SQL and NoSQL databases?",
      category: "Databases",
      difficulty: "Easy",
      expectedPoints: ["ACID properties", "Schema flexibility", "Scalability differences", "Use cases"],
      timeLimit: 180,
    },
    {
      id: "be2",
      question: "Explain RESTful API design principles and HTTP methods.",
      category: "API Design",
      difficulty: "Medium",
      expectedPoints: ["REST constraints", "HTTP methods (GET, POST, PUT, DELETE)", "Status codes", "Resource naming"],
      timeLimit: 300,
    },
    {
      id: "be3",
      question: "How would you design a scalable microservices architecture?",
      category: "System Design",
      difficulty: "Hard",
      expectedPoints: ["Service decomposition", "Communication patterns", "Data consistency", "Monitoring and logging"],
      timeLimit: 600,
    },
  ],
  fullstack: [
    {
      id: "fs1",
      question: "Walk me through the process of building a full-stack web application from scratch.",
      category: "Full Stack Development",
      difficulty: "Medium",
      expectedPoints: ["Frontend framework choice", "Backend API design", "Database selection", "Deployment strategy"],
      timeLimit: 420,
    },
    {
      id: "fs2",
      question: "How do you handle authentication and authorization in a web application?",
      category: "Security",
      difficulty: "Medium",
      expectedPoints: ["JWT tokens", "Session management", "OAuth", "Role-based access control"],
      timeLimit: 360,
    },
  ],
  mobile: [
    {
      id: "mb1",
      question: "What are the key differences between React Native and Flutter?",
      category: "Mobile Development",
      difficulty: "Easy",
      expectedPoints: [
        "JavaScript vs Dart",
        "Performance differences",
        "Platform-specific features",
        "Development experience",
      ],
      timeLimit: 240,
    },
    {
      id: "mb2",
      question: "How do you handle offline functionality in mobile applications?",
      category: "Mobile Architecture",
      difficulty: "Medium",
      expectedPoints: ["Local storage", "Data synchronization", "Offline-first approach", "Conflict resolution"],
      timeLimit: 360,
    },
    {
      id: "mb3",
      question: "Explain the mobile app deployment process for both iOS and Android.",
      category: "Mobile DevOps",
      difficulty: "Hard",
      expectedPoints: ["App Store guidelines", "Code signing", "Beta testing", "Release management"],
      timeLimit: 480,
    },
  ],
  devops: [
    {
      id: "do1",
      question: "What is the difference between Docker containers and virtual machines?",
      category: "Containerization",
      difficulty: "Easy",
      expectedPoints: ["Resource usage", "Isolation levels", "Startup time", "Use cases"],
      timeLimit: 200,
    },
    {
      id: "do2",
      question: "Explain CI/CD pipeline and its components.",
      category: "CI/CD",
      difficulty: "Medium",
      expectedPoints: ["Continuous integration", "Automated testing", "Deployment strategies", "Pipeline stages"],
      timeLimit: 300,
    },
    {
      id: "do3",
      question: "How would you implement monitoring and logging for a microservices architecture?",
      category: "Monitoring",
      difficulty: "Hard",
      expectedPoints: ["Distributed tracing", "Centralized logging", "Metrics collection", "Alerting strategies"],
      timeLimit: 600,
    },
  ],
  datascience: [
    {
      id: "ds1",
      question: "What is the difference between supervised and unsupervised learning?",
      category: "Machine Learning",
      difficulty: "Easy",
      expectedPoints: ["Labeled vs unlabeled data", "Algorithm types", "Use cases", "Evaluation methods"],
      timeLimit: 240,
    },
    {
      id: "ds2",
      question: "Explain the data preprocessing steps in a machine learning pipeline.",
      category: "Data Processing",
      difficulty: "Medium",
      expectedPoints: ["Data cleaning", "Feature engineering", "Normalization", "Handling missing values"],
      timeLimit: 360,
    },
    {
      id: "ds3",
      question: "How do you evaluate and prevent overfitting in machine learning models?",
      category: "Model Evaluation",
      difficulty: "Hard",
      expectedPoints: ["Cross-validation", "Regularization", "Model complexity", "Bias-variance tradeoff"],
      timeLimit: 480,
    },
  ],
  cybersecurity: [
    {
      id: "cs1",
      question: "What are the main types of cyber attacks and how can they be prevented?",
      category: "Security Fundamentals",
      difficulty: "Easy",
      expectedPoints: ["Phishing", "Malware", "SQL injection", "Prevention strategies"],
      timeLimit: 240,
    },
    {
      id: "cs2",
      question: "Explain the principle of least privilege and its implementation.",
      category: "Access Control",
      difficulty: "Medium",
      expectedPoints: ["Access rights management", "Role-based access", "Implementation strategies", "Benefits"],
      timeLimit: 300,
    },
    {
      id: "cs3",
      question: "How would you design a secure network architecture for an enterprise?",
      category: "Network Security",
      difficulty: "Hard",
      expectedPoints: ["Network segmentation", "Firewalls", "VPNs", "Intrusion detection systems"],
      timeLimit: 600,
    },
  ],
  cloud: [
    {
      id: "cl1",
      question: "What are the main differences between IaaS, PaaS, and SaaS?",
      category: "Cloud Models",
      difficulty: "Easy",
      expectedPoints: ["Service levels", "Responsibility models", "Use cases", "Examples"],
      timeLimit: 200,
    },
    {
      id: "cl2",
      question: "Explain auto-scaling and load balancing in cloud environments.",
      category: "Cloud Architecture",
      difficulty: "Medium",
      expectedPoints: [
        "Horizontal vs vertical scaling",
        "Load balancer types",
        "Scaling policies",
        "Cost optimization",
      ],
      timeLimit: 360,
    },
    {
      id: "cl3",
      question: "How would you migrate a legacy application to the cloud?",
      category: "Cloud Migration",
      difficulty: "Hard",
      expectedPoints: ["Migration strategies", "Dependency mapping", "Data migration", "Testing strategies"],
      timeLimit: 600,
    },
  ],
}

export function InterviewSimulator({ userId }: InterviewSimulatorProps) {
  const [selectedRole, setSelectedRole] = useState<string>("")
  const [session, setSession] = useState<InterviewSession | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const [currentAnswer, setCurrentAnswer] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [transcript, setTranscript] = useState("")

  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const currentTranscriptRef = useRef("")

  useEffect(() => {
    // Initialize speech recognition with better configuration
    if (typeof window !== "undefined" && ("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      const SpeechRecognition: any = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()

      if (recognition) {
        recognition.continuous = true
        recognition.interimResults = true
        recognition.lang = "en-US"
        recognition.maxAlternatives = 1

        recognition.onstart = () => {
          console.log("Speech recognition started for interview")
          setIsRecording(true)
          setTranscript("")
          currentTranscriptRef.current = ""
        }

        recognition.onresult = (event) => {
          let finalTranscript = ""
          let interimTranscript = ""

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript
            if (event.results[i].isFinal) {
              finalTranscript += transcript + " "
            } else {
              interimTranscript += transcript
            }
          }

          if (finalTranscript) {
            const fullTranscript = (currentAnswer + finalTranscript).trim()
            setCurrentAnswer(fullTranscript)
            currentTranscriptRef.current = fullTranscript
          }

          setTranscript(interimTranscript)
        }

        recognition.onend = () => {
          console.log("Speech recognition ended for interview")
          setIsRecording(false)
          setTranscript("")
        }

        recognition.onerror = (event) => {
          console.error("Speech recognition error in interview:", event.error)
          setIsRecording(false)
          setTranscript("")

          if (event.error !== "aborted") {
            toast({
              title: "Voice recognition error",
              description: "Please try again or type your answer.",
              variant: "destructive",
            })
          }
        }

        recognitionRef.current = recognition
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [currentAnswer])

  useEffect(() => {
    if (session?.isActive) {
      const currentQuestion = session.questions[session.currentQuestionIndex]
      setTimeRemaining(currentQuestion.timeLimit)

      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleTimeUp()
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current)
        }
      }
    }
  }, [session?.currentQuestionIndex, session?.isActive])

  const startInterview = () => {
    if (!selectedRole) {
      toast({
        title: "Please select a role",
        description: "Choose the type of interview you want to practice.",
        variant: "destructive",
      })
      return
    }

    const questions = interviewQuestions[selectedRole] || []
    if (questions.length === 0) {
      toast({
        title: "No questions available",
        description: "Questions for this role are not available yet.",
        variant: "destructive",
      })
      return
    }

    setSession({
      questions,
      currentQuestionIndex: 0,
      answers: [],
      startTime: new Date(),
      isActive: true,
    })
    setCurrentAnswer("")
    setTranscript("")
  }

  const startRecording = async () => {
    if (recognitionRef.current && !isRecording) {
      try {
        // Request microphone permission
        await navigator.mediaDevices.getUserMedia({ audio: true })
        recognitionRef.current.start()

        toast({
          title: "Recording started",
          description: "Speak your answer now. Your voice will be converted to text.",
        })
      } catch (error) {
        console.error("Microphone permission error:", error)
        toast({
          title: "Microphone access required",
          description: "Please allow microphone access to use voice recording.",
          variant: "destructive",
        })
      }
    }
  }

  const stopRecording = () => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop()

      toast({
        title: "Recording stopped",
        description: "Your voice has been converted to text. You can continue typing or submit your answer.",
      })
    }
  }

  const handleTimeUp = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    submitAnswer()
  }

  // Client-side answer analysis
  const analyzeAnswer = (question: Question, answer: string): number => {
    const answerLower = answer.toLowerCase()
    const questionLower = question.question.toLowerCase()

    let score = 0

    // Base score for length and effort
    if (answer.length < 50) score += 20
    else if (answer.length < 150) score += 40
    else if (answer.length < 300) score += 60
    else score += 70

    // Check for expected points
    const pointsFound = question.expectedPoints.filter((point) => answerLower.includes(point.toLowerCase()))
    score += pointsFound.length * 5

    // Bonus for technical terms and concepts
    const technicalTerms = [
      "algorithm",
      "database",
      "api",
      "framework",
      "security",
      "performance",
      "scalability",
      "architecture",
      "testing",
      "deployment",
      "optimization",
    ]
    const termsFound = technicalTerms.filter((term) => answerLower.includes(term))
    score += termsFound.length * 3

    // Quality indicators
    if (answer.includes("example") || answer.includes("for instance")) score += 5
    if (answer.includes("because") || answer.includes("due to")) score += 5
    if (answer.includes("best practice") || answer.includes("recommended")) score += 5

    return Math.min(score, 100)
  }

  const submitAnswer = async () => {
    if (!session || !currentAnswer.trim()) {
      toast({
        title: "No answer provided",
        description: "Please provide an answer before submitting.",
        variant: "destructive",
      })
      return
    }

    setIsAnalyzing(true)
    stopRecording()

    try {
      const currentQuestion = session.questions[session.currentQuestionIndex]
      const timeSpent = currentQuestion.timeLimit - timeRemaining

      // Use client-side analysis
      const score = analyzeAnswer(currentQuestion, currentAnswer)

      const newAnswer = {
        questionId: currentQuestion.id,
        answer: currentAnswer,
        timeSpent,
        score,
      }

      const updatedSession = {
        ...session,
        answers: [...session.answers, newAnswer],
      }

      if (session.currentQuestionIndex < session.questions.length - 1) {
        // Move to next question
        setSession({
          ...updatedSession,
          currentQuestionIndex: session.currentQuestionIndex + 1,
        })
        setCurrentAnswer("")
        setTranscript("")
        currentTranscriptRef.current = ""
      } else {
        // Interview completed
        setSession({
          ...updatedSession,
          isActive: false,
        })
        toast({
          title: "Interview completed!",
          description: "Great job! Check your results below.",
        })
      }
    } catch (error) {
      console.error("Error analyzing answer:", error)
      toast({
        title: "Analysis completed",
        description: "Your answer has been recorded and analyzed.",
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const resetInterview = () => {
    setSession(null)
    setCurrentAnswer("")
    setTimeRemaining(0)
    setIsRecording(false)
    setTranscript("")
    currentTranscriptRef.current = ""
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getOverallScore = () => {
    if (!session || session.answers.length === 0) return 0
    const totalScore = session.answers.reduce((sum, answer) => sum + answer.score, 0)
    return Math.round(totalScore / session.answers.length)
  }

  if (!session) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Interview Simulator</CardTitle>
          <CardDescription>
            Practice technical interviews with AI-powered feedback. Choose your domain and start practicing!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Interview Domain</label>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger>
                <SelectValue placeholder="Choose your technical domain for interview practice" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">Frontend Developer</SelectItem>
                <SelectItem value="backend">Backend Developer</SelectItem>
                <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                <SelectItem value="mobile">Mobile Developer</SelectItem>
                <SelectItem value="devops">DevOps Engineer</SelectItem>
                <SelectItem value="datascience">Data Scientist</SelectItem>
                <SelectItem value="cybersecurity">Cybersecurity Analyst</SelectItem>
                <SelectItem value="cloud">Cloud Architect</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">What to expect:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 3-5 technical questions based on your selected domain</li>
              <li>• Time limits for each question (3-10 minutes)</li>
              <li>• Voice-to-text recording or direct typing</li>
              <li>• Real-time scoring and feedback</li>
              <li>• Detailed analysis of your responses</li>
            </ul>
          </div>

          <Button onClick={startInterview} className="w-full" size="lg">
            Start Interview Practice
          </Button>
        </CardContent>
      </Card>
    )
  }

  const currentQuestion = session.questions[session.currentQuestionIndex]
  const progress = ((session.currentQuestionIndex + (session.isActive ? 0 : 1)) / session.questions.length) * 100

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Interview in Progress</CardTitle>
              <CardDescription>
                Question {session.currentQuestionIndex + 1} of {session.questions.length}
              </CardDescription>
            </div>
            <Button onClick={resetInterview} variant="outline" size="sm">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
      </Card>

      {session.isActive && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <Badge variant="outline">{currentQuestion.category}</Badge>
                <Badge
                  variant={
                    currentQuestion.difficulty === "Easy"
                      ? "default"
                      : currentQuestion.difficulty === "Medium"
                        ? "secondary"
                        : "destructive"
                  }
                  className="ml-2"
                >
                  {currentQuestion.difficulty}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className={`font-mono text-lg ${timeRemaining < 30 ? "text-red-600" : ""}`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Question:</h3>
              <p>{currentQuestion.question}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your Answer:</label>
              <textarea
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                placeholder="Type your answer here or use voice recording..."
                className="w-full min-h-[120px] p-3 border rounded-lg resize-none"
                disabled={isAnalyzing}
              />

              {transcript && (
                <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
                  <span className="font-medium">Speaking: </span>
                  {transcript}
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                onClick={isRecording ? stopRecording : startRecording}
                variant={isRecording ? "destructive" : "outline"}
                disabled={isAnalyzing}
                className={isRecording ? "animate-pulse" : ""}
              >
                {isRecording ? (
                  <>
                    <MicOff className="h-4 w-4 mr-2" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="h-4 w-4 mr-2" />
                    Start Recording
                  </>
                )}
              </Button>

              <Button onClick={submitAnswer} disabled={!currentAnswer.trim() || isAnalyzing} className="flex-1">
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Submit Answer"
                )}
              </Button>
            </div>

            <div className="text-xs text-muted-foreground">
              <p className="font-medium">Key points to cover:</p>
              <p>{currentQuestion.expectedPoints.join(", ")}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {!session.isActive && session.answers.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Interview Results
            </CardTitle>
            <CardDescription>Overall Score: {getOverallScore()}/100</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              {session.answers.map((answer, index) => {
                const question = session.questions[index]
                return (
                  <div key={answer.questionId} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Question {index + 1}</h4>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={answer.score >= 80 ? "default" : answer.score >= 60 ? "secondary" : "destructive"}
                        >
                          {answer.score}/100
                        </Badge>
                        <span className="text-sm text-muted-foreground">{formatTime(answer.timeSpent)}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{question.question}</p>
                    <p className="text-sm">{answer.answer.substring(0, 200)}...</p>
                  </div>
                )
              })}
            </div>

            <Button onClick={resetInterview} className="w-full">
              Start New Interview
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
