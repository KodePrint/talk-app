import { GetServerSideProps } from "next"
import { supabase } from "services/supabase"

export const isAuth = (options) => {
  return async (ctx) => {
    const { redirectTo = '/', getServerSideProps } = options ?? {}

    const { req } = ctx
    const authResult = await supabase.auth.api.getUserByCookie(req)

    if (authResult.error) {
      return {
        redirect: {
          destination: redirectTo,
          permanent: false,
        },
      }
    }

    let props = { ...authResult }
    let res 

    if (getServerSideProps) {
      res = await getServerSideProps(ctx);
      if ('props' in res)
      props = { ...res.props, ...authResult }
    }

    return {
      props,
      ...res
    }
  }
}