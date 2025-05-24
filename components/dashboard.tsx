"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChatInterface } from "@/components/chat-interface"
import { Roadmap } from "@/components/roadmap"
import { UserNav } from "@/components/user-nav"
import { VoiceAssistant } from "@/components/voice-assistant"
import { ResumeAnalyzer } from "@/components/resume-analyzer"
import { InterviewSimulator } from "@/components/interview-simulator"
import { AITestGenerator } from "@/components/ai-test-generator"

interface DashboardProps {
  user: any
}

export default function Dashboard({ user }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("mentor")

  // Get user display name with fallbacks
  const getUserName = () => {
    if (user?.name) return user.name
    if (user?.full_name) return user.full_name
    if (user?.user_metadata?.full_name) return user.user_metadata.full_name
    if (user?.user_metadata?.name) return user.user_metadata.name
    if (user?.email) return user.email.split("@")[0]
    return "User"
  }

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full flex h-16 items-center justify-between px-8 py-4">
          <div className="flex items-center gap-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-blue-600"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            <span className="text-xl">TechMentor AI</span>
          </div>
          <UserNav user={user} />
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="w-full px-8">
          <div className="flex flex-col gap-6">
            {/* Welcome Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight">
                {getGreeting()}, <span className="text-blue-600">{getUserName()}</span>! 👋
              </h1>
              <p className="text-xl text-muted-foreground mt-2">
                Your comprehensive AI-powered platform for IT career success.
              </p>
            </div>

            {/* Navigation Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto p-1">
                <TabsTrigger value="mentor" className="flex flex-col gap-1 py-3">
                  <span className="text-lg">🤖</span>
                  <span className="text-xs">AI Mentor</span>
                </TabsTrigger>
                <TabsTrigger value="voice" className="flex flex-col gap-1 py-3">
                  <span className="text-lg">🎤</span>
                  <span className="text-xs">Voice Assistant</span>
                </TabsTrigger>
                <TabsTrigger value="resume" className="flex flex-col gap-1 py-3">
                  <span className="text-lg">📄</span>
                  <span className="text-xs">Resume Analyzer</span>
                </TabsTrigger>
                <TabsTrigger value="interview" className="flex flex-col gap-1 py-3">
                  <span className="text-lg">💼</span>
                  <span className="text-xs">Interview Prep</span>
                </TabsTrigger>
                <TabsTrigger value="tests" className="flex flex-col gap-1 py-3">
                  <span className="text-lg">📝</span>
                  <span className="text-xs">AI Tests</span>
                </TabsTrigger>
                <TabsTrigger value="roadmap" className="flex flex-col gap-1 py-3">
                  <span className="text-lg">🗺️</span>
                  <span className="text-xs">Learning Roadmap</span>
                </TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <div className="mt-8">
                <TabsContent value="mentor" className="mt-0">
                  <ChatInterface userId={user?.id} />
                </TabsContent>
                <TabsContent value="voice" className="mt-0">
                  <VoiceAssistant userId={user?.id} />
                </TabsContent>
                <TabsContent value="resume" className="mt-0">
                  <ResumeAnalyzer userId={user?.id} />
                </TabsContent>
                <TabsContent value="interview" className="mt-0">
                  <InterviewSimulator userId={user?.id} />
                </TabsContent>
                <TabsContent value="tests" className="mt-0">
                  <AITestGenerator userId={user?.id} />
                </TabsContent>
                <TabsContent value="roadmap" className="mt-0">
                  <Roadmap userId={user?.id} />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
