import { getSupabaseUser } from 'services/get-auth-user';
// Import Context
import { AuthContextProvider } from 'context/AuthContext';
// Import Custom Hooks
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
