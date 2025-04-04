import { auth  , provider} from "./config/firebase"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom"
function Login() {
const navigate = useNavigate()
  const signInWithGoogle = async()=>{
    const result = await signInWithPopup(auth, provider)
    console.log(result);
    navigate('/')
  }
  return (
    <>
      <h1>Sign in with Google</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )
}
export default Login