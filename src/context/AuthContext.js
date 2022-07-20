import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { supabase } from "services/supabase";
import { getSupabaseUser } from "services/get-auth-user";
import { createAuthToken } from "utils/createAuthToken";

const initialAuthContext = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState();
  const user = getSupabaseUser();
  const sessionEvent = supabase.auth.onAuthStateChange((event) => {
    return event
  })

  const signInWithGoogle = useCallback(async () => {
    return await supabase.auth.signIn({ provider: "google"}, {shouldCreateUser: true});
  }, [])

  const signInWithGithub = useCallback(async () => {
    return await supabase.auth.signIn({ provider: "github"}, {shouldCreateUser: true});
  }, [])

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    return router.push("/");
  }, [router])

  useEffect(() => {
    const loginEvent = supabase.auth.onAuthStateChange(
      async (event, session) => await createAuthToken(event, session)
    )

    return () => { loginEvent.data.unsubscribe() }
  },[])

  useEffect(() => {
    setUserInfo(user);
  }, []);

  return {
    user,
    signInWithGithub,
    signInWithGoogle,
    signOut,
    userInfo
  }


}

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={initialAuthContext()}>{children}</AuthContext.Provider>
}