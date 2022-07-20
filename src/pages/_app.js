// Import Context
import { UserContextProvider } from 'context/userContext'
// Import Custom Hooks
import { useSessionUser } from 'hooks/useSessionUser'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
