"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User, Code, BookOpen, Briefcase, FileText, Settings, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  category?: string
  model?: string
}

interface AIMentorProps {
  userId: string
}

export function AIMentorClient({ userId }: AIMentorProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI mentor powered by Groq's lightning-fast LLaMA models. I can help you with programming, career advice, interview preparation, and technical guidance. What would you like to learn about today?",
      sender: "bot",
      timestamp: new Date(),
      category: "greeting",
      model: "groq-llama-3.1-8b-instant",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("") // Clear input immediately
    setIsTyping(true)

    try {
      // Call Groq AI API
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          userId,
          context: "AI Mentor Chat",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get AI response")
      }

      const data = await response.json()

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: "bot",
        timestamp: new Date(),
        category: detectCategory(input),
        model: data.model,
      }

      setMessages((prev) => [...prev, botMessage])

      if (data.error) {
        toast({
          title: "API Notice",
          description: data.error,
          variant: "destructive",
        })
      }

      if (data.note) {
        toast({
          title: "Model Update",
          description: data.note,
        })
      }
    } catch (error) {
      console.error("Error getting AI response:", error)

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm experiencing some technical difficulties. Please try again in a moment. In the meantime, I can still help you with general programming and career guidance questions!",
        sender: "bot",
        timestamp: new Date(),
        category: "error",
        model: "fallback",
      }

      setMessages((prev) => [...prev, errorMessage])

      toast({
        title: "Connection Error",
        description: "Unable to connect to AI service. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsTyping(false)
    }
  }

  const detectCategory = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    if (
      lowerMessage.includes("code") ||
      lowerMessage.includes("programming") ||
      lowerMessage.includes("javascript") ||
      lowerMessage.includes("python")
    ) {
      return "programming"
    }
    if (lowerMessage.includes("career") || lowerMessage.includes("job") || lowerMessage.includes("salary")) {
      return "career"
    }
    if (lowerMessage.includes("interview") || lowerMessage.includes("prepare")) {
      return "interview"
    }
    if (lowerMessage.includes("learn") || lowerMessage.includes("course") || lowerMessage.includes("education")) {
      return "education"
    }
    if (lowerMessage.includes("resume") || lowerMessage.includes("cv")) {
      return "resume"
    }

    return "general"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case "programming":
        return <Code className="h-4 w-4" />
      case "education":
        return <BookOpen className="h-4 w-4" />
      case "career":
        return <Briefcase className="h-4 w-4" />
      case "interview":
        return <Settings className="h-4 w-4" />
      case "resume":
        return <FileText className="h-4 w-4" />
      default:
        return <Bot className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case "programming":
        return "bg-blue-500"
      case "education":
        return "bg-green-500"
      case "career":
        return "bg-purple-500"
      case "interview":
        return "bg-orange-500"
      case "resume":
        return "bg-red-500"
      case "error":
        return "bg-red-600"
      default:
        return "bg-gray-500"
    }
  }

  const getModelBadge = (model?: string) => {
    if (!model) return null

    const modelColors = {
      "groq-llama-3.1-8b-instant": "bg-green-100 text-green-800",
      "groq-llama-3.1-70b-versatile": "bg-blue-100 text-blue-800",
      fallback: "bg-gray-100 text-gray-800",
    }

    const modelNames = {
      "groq-llama-3.1-8b-instant": "Groq LLaMA 8B Instant",
      "groq-llama-3.1-70b-versatile": "Groq LLaMA 70B",
      fallback: "Fallback",
    }

    return (
      <Badge
        variant="secondary"
        className={`text-xs ${modelColors[model as keyof typeof modelColors] || "bg-gray-100 text-gray-800"}`}
      >
        {modelNames[model as keyof typeof modelNames] || model}
      </Badge>
    )
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Card className="h-[700px] flex flex-col shadow-lg border-0">
        <CardHeader className="pb-4 border-b bg-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Bot className="h-6 w-6 text-blue-600" />
            Groq AI Mentor Chat
            <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
              Powered by LLaMA 3.1
            </Badge>
          </CardTitle>
          <CardDescription className="text-base">
            Get instant, intelligent responses powered by Groq's ultra-fast AI models
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
          <ScrollArea className="flex-1 h-full" ref={scrollAreaRef}>
            <div className="p-4">
              <div className="space-y-6 px-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 w-full ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender === "bot" && (
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 ${getCategoryColor(message.category)}`}
                      >
                        {getCategoryIcon(message.category)}
                      </div>
                    )}

                    <div
                      className={`flex flex-col ${message.sender === "user" ? "items-end" : "items-start"} ${
                        message.sender === "user" ? "max-w-[75%]" : "max-w-[80%]"
                      } min-w-0`}
                    >
                      <div
                        className={`rounded-2xl p-4 w-full ${
                          message.sender === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-50 text-gray-900 border border-gray-200"
                        }`}
                        style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
                      >
                        {message.sender === "bot" && (
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            {message.category && (
                              <Badge variant="secondary" className="text-xs">
                                {message.category}
                              </Badge>
                            )}
                            {getModelBadge(message.model)}
                          </div>
                        )}
                        <div
                          className="text-sm leading-relaxed"
                          style={{
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                            overflowWrap: "anywhere",
                            maxWidth: "100%",
                          }}
                        >
                          {message.text}
                        </div>
                      </div>
                      <div
                        className={`text-xs text-gray-500 mt-1 px-2 ${message.sender === "user" ? "text-right" : "text-left"}`}
                      >
                        <ClientTime date={message.timestamp} />
                      </div>
                    </div>

                    {message.sender === "user" && (
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0">
                        <User className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {isTyping && (
                <div className="flex gap-4 justify-start">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white flex-shrink-0">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">Groq AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Invisible element to scroll to */}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="border-t bg-white p-6">
            <div className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about programming, career advice, interview prep, or anything IT-related..."
                disabled={isTyping}
                className="flex-1 h-12 text-base"
              />
              <Button onClick={handleSend} disabled={!input.trim() || isTyping} size="lg" className="h-12 px-6">
                {isTyping ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              </Button>
            </div>

            <div className="text-xs text-gray-500 mt-3 flex items-center justify-between">
              <span>Powered by Groq's lightning-fast LLaMA models</span>
              <span className="text-green-600 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Ultra-fast responses
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ClientTime({ date }: { date: Date }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(date.toLocaleTimeString());
  }, [date]);

  return <>{time}</>;
}
