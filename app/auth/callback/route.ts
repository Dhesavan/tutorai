import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
      const cookieStore = cookies()
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
      
      // Exchange the code for a session
      const { error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (error) {
        console.error('Auth error:', error.message)
        return NextResponse.redirect(`${requestUrl.origin}/auth/error`)
      }

      // Get the user session
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        return NextResponse.redirect(`${requestUrl.origin}/auth/error`)
      }
    }

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(requestUrl.origin)
  } catch (error) {
    console.error('Callback error:', error)
    return NextResponse.redirect(`${request.url.split('?')[0]}/auth/error`)
  }
} 