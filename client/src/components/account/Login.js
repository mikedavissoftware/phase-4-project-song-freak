import {useState} from "react"
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import {useHistory} from 'react-router-dom'



export default function Login({onLogin, history}){
  const [showLogin, setShowLogin] = useState(true);

  const redirect = () => {
    history.push('/me');
  }

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} redirect={redirect} />
         
          <p>
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} redirect={redirect} />
          
          <p>
            Already have an account? &nbsp;
            <button onClick={redirect}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  )
}


