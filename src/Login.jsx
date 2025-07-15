import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'

function Login() {
  function handleLogin() {
    signInWithPopup(auth, provider)
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  )
}

export default Login 