import { supabase } from "services/supabase";
import { useRouter } from "next/router";
// Import Custom Hooks
// Import Components
import Login from "containers/Login";

const HomeSection = () => {
  const router = useRouter();

  return (
    <>
      <h1>Talk-app</h1>
      <h3>Is the new app for create conversation private with yoyur comunity</h3>
      <Login onSuccess={() => router.push('/dashboard')}/>
    </>
  );
}

export default HomeSection;

export const getServerSideProps = async ({req}) => {
  const { user, error } = await supabase.auth.api.getUserByCookie(req)

  console.log(user)

  if (!error) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return { props: {} }
}
