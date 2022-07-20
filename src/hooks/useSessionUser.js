import { useState, useEffect, useContext } from "react";
import { supabase } from "services/supabase";
import { useRouter } from "next/router";
import { UserContext } from "../context/userContext";

export const useSessionUser = () => {

  const router = useRouter();
  const { userSession, setUserSession } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const providerUser = {}

  if (supabase.auth.session()) {
    // console.log(supabase.auth.session())
    const { access_token,  user: {app_metadata: {provider}, user_metadata}} = supabase.auth.session();
    // console.log(user_metadata)
    providerUser = {
      token: access_token,
      email: user_metadata.email,
      avatar: user_metadata.avatar_url,
      name: user_metadata.name,
      userName: user_metadata.user_name,
    };
    if (provider === "google") {
      providerUser.userName = user_metadata.name
      
    }
  }

  useEffect(() => {
    setIsLoading(true)
    setUserSession(providerUser);
    setIsLoading(false)
  }, [isLoading]);


  return {userSession, setUserSession, isLoading}
}