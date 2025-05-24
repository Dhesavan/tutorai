"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, MicOff, Volume2, VolumeX, Loader2, AlertCircle, CheckCircle, Zap } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

interface VoiceAssistantProps {
  userId: string
  onResponse?: (response: string) => void
}

// Declare SpeechRecognition interface
declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
}

export function VoiceAssistant({ userId, onResponse }: VoiceAssistantProps) {
  const [isListening, setIsListening] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [lastResponse, setLastResponse] = useState("")
  const [isSupported, setIsSupported] = useState(false)
  const [permissionGranted, setPermissionGranted] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<"disconnected" | "connecting" | "connected">("disconnected")
  const [responseModel, setResponseModel] = useState<string>("")

  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const currentTranscriptRef = useRef("")
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const speechQueueRef = useRef<string[]>([])
  const isSpeechActiveRef = useRef(false)

  useEffect(() => {
    initializeVoiceFeatures()
    return cleanup
  }, [])

  const initializeVoiceFeatures = () => {
    const speechRecognitionSupported =
      typeof window !== "undefined" && ("webkitSpeechRecognition" in window || "SpeechRecognition" in window)

    const speechSynthesisSupported = typeof window !== "undefined" && "speechSynthesis" in window

    setIsSupported(speechRecognitionSupported && speechSynthesisSupported)

    if (speechRecognitionSupported) {
      setupSpeechRecognition()
    }

    if (speechSynthesisSupported) {
      setupSpeechSynthesis()
    }
  }

  const setupSpeechRecognition = () => {
    const SpeechRecognition: any = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.continuous = false
    recognition.interimResults = true
    recognition.lang = "en-US"
    recognition.maxAlternatives = 1

    recognition.onstart = () => {
      console.log("🎤 Voice recognition started")
      setIsListening(true)
      setConnectionStatus("connected")
      setPermissionGranted(true)
      setTranscript("")
      currentTranscriptRef.current = ""

      timeoutRef.current = setTimeout(() => {
        if (recognition && isListening) {
          recognition.stop()
        }
      }, 15000) // 15 seconds max
    }

    recognition.onresult = (event) => {
      let finalTranscript = ""
      let interimTranscript = ""

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript
        if (event.results[i].isFinal) {
          finalTranscript += transcript
        } else {
          interimTranscript += transcript
        }
      }

      if (finalTranscript) {
        currentTranscriptRef.current = finalTranscript.trim()
        setTranscript(finalTranscript.trim())
        console.log("📝 Final transcript:", finalTranscript.trim())
      } else {
        setTranscript(interimTranscript)
      }
    }

    recognition.onend = () => {
      console.log("🛑 Voice recognition ended")
      setIsListening(false)
      setConnectionStatus("disconnected")

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      const finalText = currentTranscriptRef.current.trim()
      if (finalText && finalText.length > 2) {
        console.log("🔄 Processing transcript:", finalText)
        handleVoiceInput(finalText)
      } else {
        console.log("❌ No valid transcript to process")
        toast({
          title: "No speech detected",
          description: "Please speak clearly and try again.",
        })
      }
    }

    recognition.onerror = (event) => {
      console.error("❌ Speech recognition error:", event.error)
      setIsListening(false)
      setConnectionStatus("disconnected")

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      const errorMessages = {
        "not-allowed": "Microphone permission denied. Please allow access.",
        "no-speech": "No speech detected. Please try speaking again.",
        "audio-capture": "Microphone not available. Check your device.",
        network: "Network error. Check your internet connection.",
        aborted: "Speech recognition was stopped.",
        "service-not-allowed": "Speech service not allowed.",
      }

      const message =
        errorMessages[event.error as keyof typeof errorMessages] || `Speech recognition error: ${event.error}`

      if (event.error !== "aborted") {
        toast({
          title: "Voice Recognition Error",
          description: message,
          variant: "destructive",
        })
      }
    }

    recognitionRef.current = recognition
  }

  const setupSpeechSynthesis = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis

      const loadVoices = () => {
        if (!synthRef.current) return

        const voices = synthRef.current.getVoices()
        console.log("🔊 Loading voices:", voices.length)

        if (voices.length > 0) {
          const englishVoices = voices.filter((voice) => voice.lang.startsWith("en"))
          const localVoices = voices.filter((voice) => voice.localService)
          console.log("🔊 English voices:", englishVoices.length)
          console.log("🔊 Local voices:", localVoices.length)
        }
      }

      // Handle voice loading with multiple strategies
      if (synthRef.current.onvoiceschanged !== undefined) {
        synthRef.current.onvoiceschanged = loadVoices
      }

      // Try loading voices immediately
      loadVoices()

      // Fallback attempts
      setTimeout(loadVoices, 100)
      setTimeout(loadVoices, 500)
      setTimeout(loadVoices, 1000)
    }
  }

  const cleanup = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
    stopAllSpeech()
  }

  const stopAllSpeech = () => {
    if (synthRef.current) {
      try {
        synthRef.current.cancel()
      } catch (error) {
        console.log("Error cancelling speech:", error)
      }
    }

    if (currentUtteranceRef.current) {
      currentUtteranceRef.current = null
    }

    speechQueueRef.current = []
    isSpeechActiveRef.current = false
    setIsSpeaking(false)
  }

  const requestMicrophonePermission = async () => {
    try {
      setConnectionStatus("connecting")
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      })

      const audioContext = new AudioContext()
      const source = audioContext.createMediaStreamSource(stream)
      const analyser = audioContext.createAnalyser()
      source.connect(analyser)

      stream.getTracks().forEach((track) => track.stop())
      audioContext.close()

      setPermissionGranted(true)
      setConnectionStatus("connected")

      toast({
        title: "Microphone ready",
        description: "Voice features are now available.",
      })

      return true
    } catch (error) {
      console.error("🎤 Microphone permission error:", error)
      setConnectionStatus("disconnected")

      toast({
        title: "Microphone access required",
        description: "Please allow microphone access to use voice features.",
        variant: "destructive",
      })
      return false
    }
  }

  const startListening = async () => {
    if (!isSupported) {
      toast({
        title: "Not supported",
        description: "Voice features require a modern browser like Chrome or Edge.",
        variant: "destructive",
      })
      return
    }

    if (!permissionGranted) {
      const granted = await requestMicrophonePermission()
      if (!granted) return
    }

    // Stop any ongoing speech before listening
    stopAllSpeech()

    if (recognitionRef.current && !isListening && !isProcessing) {
      setTranscript("")
      setLastResponse("")
      setResponseModel("")
      currentTranscriptRef.current = ""

      try {
        console.log("🚀 Starting speech recognition...")
        recognitionRef.current.start()

        toast({
          title: "Listening...",
          description: "Speak your question clearly. I'm listening!",
        })
      } catch (error) {
        console.error("❌ Error starting recognition:", error)
        toast({
          title: "Error",
          description: "Could not start voice recognition. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      console.log("⏹️ Stopping speech recognition...")
      recognitionRef.current.stop()
    }
  }

  const handleVoiceInput = async (voiceText: string) => {
    if (!voiceText.trim()) {
      console.log("❌ Empty voice text, skipping processing")
      return
    }

    console.log("🔄 Processing voice input with Groq AI:", voiceText)
    setIsProcessing(true)

    try {
      // Call Groq AI API for voice
      const response = await fetch("/api/ai/voice-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: voiceText,
          userId,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get AI response")
      }

      const data = await response.json()
      const responseText = data.response

      setLastResponse(responseText)
      setResponseModel(data.model)

      if (onResponse) {
        onResponse(responseText)
      }

      speakText(responseText)

      toast({
        title: "Groq AI Response Ready!",
        description: "Your question has been processed with lightning speed.",
      })

      if (data.error) {
        toast({
          title: "API Notice",
          description: data.error,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("❌ Error processing voice input:", error)
      const errorMessage = "I'm having trouble connecting to the AI service right now. Please try again in a moment."
      setLastResponse(errorMessage)
      setResponseModel("fallback")
      speakText(errorMessage)

      toast({
        title: "Processing Error",
        description: "Failed to process your voice input. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
      setTranscript("")
    }
  }

  const speakText = (text: string) => {
    if (!synthRef.current || !text) {
      console.log("Speech synthesis not available or no text provided")
      return
    }

    // Stop any current speech
    stopAllSpeech()

    // Clean and prepare text for speech
    const cleanText = text
      .replace(/[•*]/g, "")
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/```[\s\S]*?```/g, "code example")
      .replace(/#{1,6}\s/g, "")
      .replace(/\n\n+/g, ". ")
      .replace(/\n/g, " ")
      .replace(/\$\d+[,\d]*-?\d*[kK]?/g, (match) => match.replace(/\$/g, "").replace(/k/gi, " thousand dollars"))
      .replace(/[^\w\s.,!?-]/g, "") // Remove special characters that might cause issues
      .trim()

    // Limit text length to prevent synthesis issues
    const maxLength = 150 // Reduced for better reliability
    let textToSpeak = cleanText
    if (cleanText.length > maxLength) {
      const sentences = cleanText.split(/[.!?]+/).filter((s) => s.trim())
      textToSpeak = ""
      for (const sentence of sentences) {
        if (textToSpeak.length + sentence.length > maxLength) break
        textToSpeak += (textToSpeak ? ". " : "") + sentence.trim()
      }
      if (textToSpeak && !textToSpeak.endsWith(".")) textToSpeak += "."
    }

    if (!textToSpeak || textToSpeak.length < 3) {
      console.log("No valid text to speak after processing")
      return
    }

    // Wait for any previous speech to fully stop
    setTimeout(() => {
      if (!synthRef.current || isSpeechActiveRef.current) {
        console.log("Speech synthesis busy or unavailable")
        return
      }

      try {
        const utterance = new SpeechSynthesisUtterance(textToSpeak)
        currentUtteranceRef.current = utterance

        // Conservative speech settings for maximum compatibility
        utterance.rate = 0.9
        utterance.pitch = 1.0
        utterance.volume = 0.6
        utterance.lang = "en-US"

        // Get available voices and select the most reliable one
        const voices = synthRef.current.getVoices()

        if (voices.length > 0) {
          // Prefer local/system voices for reliability
          const selectedVoice =
            voices.find((voice) => voice.lang === "en-US" && voice.localService && voice.default) ||
            voices.find((voice) => voice.lang === "en-US" && voice.localService) ||
            voices.find((voice) => voice.lang.startsWith("en") && voice.localService) ||
            voices.find((voice) => voice.lang === "en-US") ||
            voices.find((voice) => voice.lang.startsWith("en")) ||
            voices[0]

          if (selectedVoice) {
            utterance.voice = selectedVoice
            console.log("Selected voice:", selectedVoice.name, selectedVoice.lang, "Local:", selectedVoice.localService)
          }
        }

        // Set up event handlers with improved error handling
        utterance.onstart = () => {
          console.log("🔊 Speech synthesis started")
          isSpeechActiveRef.current = true
          setIsSpeaking(true)
        }

        utterance.onend = () => {
          console.log("🔊 Speech synthesis completed")
          isSpeechActiveRef.current = false
          setIsSpeaking(false)
          currentUtteranceRef.current = null
        }

        utterance.onerror = (event) => {
          console.log("🔊 Speech synthesis error:", event.error)
          isSpeechActiveRef.current = false
          setIsSpeaking(false)
          currentUtteranceRef.current = null

          // Handle specific error types gracefully
          if (event.error === "interrupted") {
            console.log("Speech was interrupted - this is normal")
            return // Don't show error for interruptions
          }

          if (event.error === "canceled") {
            console.log("Speech was canceled - this is normal")
            return // Don't show error for cancellations
          }

          // Only show errors for actual problems
          if (event.error !== "network" && event.error !== "synthesis-unavailable") {
            console.error("Unexpected speech error:", event.error)
          }
        }

        utterance.onpause = () => {
          console.log("🔊 Speech paused")
        }

        utterance.onresume = () => {
          console.log("🔊 Speech resumed")
        }

        // Check if synthesis is ready
        if (synthRef.current.speaking || synthRef.current.pending) {
          console.log("Speech synthesis still busy, cancelling and retrying...")
          synthRef.current.cancel()
          setTimeout(() => {
            if (synthRef.current && currentUtteranceRef.current === utterance) {
              console.log("🔊 Retrying speech synthesis...")
              synthRef.current.speak(utterance)
            }
          }, 300)
        } else {
          console.log("🔊 Starting speech synthesis...")
          synthRef.current.speak(utterance)
        }
      } catch (error) {
        console.error("🔊 Error creating speech utterance:", error)
        isSpeechActiveRef.current = false
        setIsSpeaking(false)
        currentUtteranceRef.current = null
      }
    }, 200) // Increased delay for better reliability
  }

  const stopSpeaking = () => {
    console.log("🔊 Manually stopping speech...")
    stopAllSpeech()
  }

  const getStatusIcon = () => {
    switch (connectionStatus) {
      case "connected":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "connecting":
        return <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />
    }
  }

  const getModelBadge = (model: string) => {
    const modelColors = {
      "groq-llama-3.1-8b-instant": "bg-green-100 text-green-800 border-green-200",
      "groq-llama-3.1-70b-versatile": "bg-blue-100 text-blue-800 border-blue-200",
      "fallback-voice": "bg-gray-100 text-gray-800 border-gray-200",
    }

    const modelNames = {
      "groq-llama-3.1-8b-instant": "Groq LLaMA 8B Instant",
      "groq-llama-3.1-70b-versatile": "Groq LLaMA 70B",
      "fallback-voice": "Fallback",
    }

    return (
      <Badge
        variant="outline"
        className={`text-xs ${modelColors[model as keyof typeof modelColors] || "bg-gray-100 text-gray-800"}`}
      >
        <Zap className="h-3 w-3 mr-1" />
        {modelNames[model as keyof typeof modelNames] || model}
      </Badge>
    )
  }

  if (!isSupported) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            Voice Assistant - Browser Not Supported
          </CardTitle>
          <CardDescription>Voice features require a modern browser with speech recognition support.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h4 className="font-medium text-orange-800 mb-2">Recommended Browsers:</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Google Chrome (recommended)</li>
                <li>• Microsoft Edge</li>
                <li>• Safari (macOS/iOS)</li>
                <li>• Opera</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">Please switch to a supported browser to use voice features.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mic className="h-5 w-5" />
          Groq AI Voice Assistant
          {getStatusIcon()}
          <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
            <Zap className="h-3 w-3 mr-1" />
            Ultra-Fast AI
          </Badge>
        </CardTitle>
        <CardDescription>
          Ask your Groq-powered AI mentor questions using your voice. Get lightning-fast responses with voice feedback.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={isListening ? stopListening : startListening}
            disabled={isProcessing || isSpeaking}
            size="lg"
            className={`${
              isListening ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-blue-500 hover:bg-blue-600"
            } min-w-[160px]`}
          >
            {isListening ? (
              <>
                <MicOff className="h-5 w-5 mr-2" />
                Stop Listening
              </>
            ) : (
              <>
                <Mic className="h-5 w-5 mr-2" />
                Start Speaking
              </>
            )}
          </Button>

          {isSpeaking && (
            <Button onClick={stopSpeaking} variant="outline" size="lg">
              <VolumeX className="h-5 w-5 mr-2" />
              Stop Speaking
            </Button>
          )}
        </div>

        {/* Status Indicators */}
        {isListening && (
          <div className="flex items-center justify-center gap-2 text-blue-600 animate-pulse bg-blue-50 p-3 rounded-lg">
            <Mic className="h-4 w-4" />
            <span className="font-medium">Listening... Speak now!</span>
          </div>
        )}

        {isProcessing && (
          <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Processing with Groq AI...</span>
            <Zap className="h-4 w-4" />
          </div>
        )}

        {isSpeaking && (
          <div className="flex items-center justify-center gap-2 text-purple-600 bg-purple-50 p-3 rounded-lg">
            <Volume2 className="h-4 w-4" />
            <span className="font-medium">Speaking response...</span>
          </div>
        )}

        {/* Transcript Display */}
        {transcript && (
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm font-medium mb-1 text-blue-700">You're saying:</p>
            <p className="text-sm text-blue-800">{transcript}</p>
          </div>
        )}

        {/* Response Display */}
        {lastResponse && (
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-green-700">Groq AI Response:</p>
                {responseModel && getModelBadge(responseModel)}
              </div>
              <Button
                onClick={() => speakText(lastResponse)}
                variant="ghost"
                size="sm"
                disabled={isSpeaking}
                className="text-green-600 hover:text-green-700"
              >
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-sm text-green-800 max-h-60 overflow-y-auto">
              {lastResponse.split("\n").map((line, index) => (
                <p key={index} className="mb-1">
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Usage Instructions */}
        <div className="text-xs text-muted-foreground space-y-2 bg-gray-50 p-4 rounded-lg">
          <p className="font-medium text-gray-700 flex items-center gap-1">
            <Zap className="h-3 w-3" />
            How to use effectively:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <p>• Speak clearly and at normal pace</p>
              <p>• Ask about programming, career, or tech topics</p>
              <p>• Wait for the response before asking again</p>
            </div>
            <div>
              <p>• Use headphones to avoid feedback</p>
              <p>• Ensure good microphone connection</p>
              <p>• Try rephrasing if not understood</p>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-200">
            <p className="text-green-600 font-medium">⚡ Powered by Groq's lightning-fast LLaMA models</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
