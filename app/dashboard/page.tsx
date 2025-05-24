"use client"

import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Dashboard from "@/components/dashboard"
import { getProfile } from "@/lib/supabase"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClientComponentClient()

  useEffect(() => {
    async function getUserData() {
      try {
        // Get user from auth
        const {
          data: { user: authUser },
          error: userError,
        } = await supabase.auth.getUser()

        if (userError) throw userError

        if (authUser) {
          try {
            // Get profile data from database
            const profile = await getProfile(authUser.id)
            setUser({ ...authUser, ...profile })
          } catch (error) {
            // If profile not found, use auth data only
            setUser(authUser)
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      } finally {
        setLoading(false)
      }
    }

    getUserData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return <Dashboard user={user} />
}
