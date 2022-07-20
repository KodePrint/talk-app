import { AuthContext } from "context/AuthContext";
import { useContext } from "react";

export const useAuthSession = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthSession must be used within a AuthContext");
  }
  return context;
}