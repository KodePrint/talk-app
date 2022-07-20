import { supabase } from "./supabase";


export const getSupabaseUser = () => {

  const user = {};
  const session = supabase.auth.session();
  if (session) {
    const { 
      access_token,  
      user: {
        app_metadata: {
          provider
        }, 
        user_metadata
      }
    } = session;

    user.token = access_token;
    user.email = user_metadata.email;
    user.avatar = user_metadata.avatar_url || 'https://es.wikipedia.org/wiki/Archivo:No-photo-m.png';
    user.name = user_metadata.name;
    provider === "google" 
      ? (user.userName = user_metadata.name.split(" ")[0].toLowerCase().charAt(0).toUpperCase() + user_metadata.name.split(" ")[0].slice(1))
      : user.userName = user_metadata.user_name;
  }

  return user
}