import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// console.log(
//   SUPABASE_URL,
//   SUPABASE_KEY
// )

export const supabase = createClient(supabaseUrl, supabaseKey)

export const loginWithGithub = async () => {
  const { user, session, error } = await supabase.auth.signIn({
      provider: 'github',
    }, 
    {shouldCreateUser: true},
    // {redirectTo: 'http://localhost:3000/dashboard',}
  )
  if (error) throw error
}

export const loginWithGoogle = async () => {
  const { user, session, error } = await supabase.auth.signIn({
      provider: 'google',
    }, 
    {shouldCreateUser: true},
    // {redirectTo: 'http://localhost:3000/dashboard',}
  )
  if (error) throw error
}

export const logut = async () => {
  const { error } = await supabase.auth.signOut()
}