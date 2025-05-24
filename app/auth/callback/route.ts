import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { upsertProfile } from '@/lib/supabase'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { session }, error: sessionError } = await supabase.auth.exchangeCodeForSession(code)

    if (sessionError) {
      console.error('Error exchanging code for session:', sessionError)
      return NextResponse.redirect(new URL('/', requestUrl.origin))
    }

    if (session?.user) {
      // Check if profile exists
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()

      // If no profile exists, create one
      if (profileError && profileError.code === 'PGRST116') {
        try {
          await upsertProfile(session.user.id, {
            name: session.user.user_metadata.name || session.user.user_metadata.full_name || session.user.email?.split('@')[0],
            avatar_url: session.user.user_metadata.avatar_url,
            created_at: new Date().toISOString(),
          })
        } catch (error) {
          console.error('Error creating profile:', error)
        }
      }
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(new URL('/dashboard', requestUrl.origin))
} 