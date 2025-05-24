import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { createClient } from "@supabase/supabase-js"

// Get the current URL for authentication redirects
const getRedirectUrl = () => {
  if (typeof window !== 'undefined') {
    // Client-side: use the current URL
    return window.location.origin
  }
  // Server-side: use environment variable or default to localhost
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}

// Create a single supabase client for interacting with your database
export const supabase = createClientComponentClient()

// Create a server-side client
export const createServerSupabaseClient = () => createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
)

// Function to create or update a user profile
export async function upsertProfile(userId: string, profileData: any) {
  const { data, error } = await supabase
    .from('profiles')
    .upsert({
      id: userId,
      ...profileData,
      updated_at: new Date().toISOString(),
    })
    .select()
    .single()

  if (error) throw error
  return data
}

// Function to get a user's profile
export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}
