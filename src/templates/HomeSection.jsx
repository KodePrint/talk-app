import {loginWithGithub, loginWithGoogle } from "services/supabase";

const HomeSection = () => {

  const handleGithubLogin = () => {
    loginWithGithub()
  }
  const handleGoogleLogin = () => {
    loginWithGoogle()
  }

  return (
    <>
      <h1>Talk-app</h1>
      <h3>Is the new app for create conversation private with yoyur comunity</h3>

      <div className="login">
        <h3>Enjoy the Talk-app now</h3>
        <button
          onClick={handleGoogleLogin}>
            Login with Google
        </button>
        <button
          onClick={handleGithubLogin}>
            Login with Github
        </button>
      </div>
      <style jxs>{`
        .login {
          margin-top: 18px;
          padding: 20px;
          border-radius: 5px;
          border: 2px solid rgba(255,255,255,.3);
          gap: 18px;
        }
        .login h3 {
          font-size: 24px;
          margin-bottom: 18px;
        }

        .login button {
          border: none;
          background: rgba(255,255,255,.3);
          width: 100%;
          margin-bottom: 18px;
          padding: 18px;
          border-radius: 6px;
        }
      `}</style>
    </>
  );
}

export default HomeSection;