import twilio from "twilio";
import { supabase } from "services/supabase";

const TWILIO_ACCOUNT_SID = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID
const TWILIO_API_KEY = process.env.NEXT_PUBLIC_TWILIO_API_KEY
const TWILIO_API_SECRET = process.env.NEXT_PUBLIC_TWILIO_API_SECRET
const SERVICE_SID = process.env.NEXT_PUBLIC_SERVICE_SID

export default async function getAccessToken( req, res ) {
  console.log(req.headers)
  const jwt = req
  if (jwt == null)
    res.status(401).json({ error: "No JWT provided" })

    const user = await supabase.auth.api.getUser(jwt)
  console.log(user)
  const identity = user.identity
  console.log(identity)

  if (identity == null ) 
    res.status(401).json({ error: "No identity provided" })
  
  const accessToken = new AccessToken(
    TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY,
    TWILIO_API_SECRET, 
    {
      identity
    }
  )
  const conversationGrant = new ChatGrant({
    serviceSid: SERVICE_SID,
  })

  accessToken.addGrant(conversationGrant)

  console.log(accessToken.toJwt())

  res.status(200).json(accessToken.toJwt())
}