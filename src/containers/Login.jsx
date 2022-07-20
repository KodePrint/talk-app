import { useRouter } from "next/router";
// Import Components
// Import Custom Hooks
import { useAuthSession } from "hooks/useAuthSession";

import { supabase, loginWithGithub } from "services/supabase";
// Import Styles
import styles from '../styles/Login.module.scss';

const Login = ({onSuccess}) => {

  const { signInWithGoogle, signInWithGithub, user, userInfo } = useAuthSession();

  // console.log('User-Info: ',userInfo);
  // console.log('User: ', user);
  
  return (
    <div 
      className={styles.login}>
      <h3>Enjoy the Talk-app now</h3>
      <button
        onClick={signInWithGoogle}>
          Login with Google
      </button>
      <button
        onClick={signInWithGithub}>
          Login with Github
      </button>
    </div>
  );
}

export default Login;