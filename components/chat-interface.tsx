"use client"
import { AIMentorClient } from "./ai-mentor-client"

interface ChatInterfaceProps {
  userId: string
}

export function ChatInterface({ userId }: ChatInterfaceProps) {
  return <AIMentorClient userId={userId} />
}

// Also export as default for backward compatibility
export default ChatInterface
