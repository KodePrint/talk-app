import { supabase } from "services/supabase";

export const createAuthToken = async (e, session) => {
  await fetch('api/authToken', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify({e, session})
  })
}