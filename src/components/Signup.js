import '../styles/signup.css';
import sign_image from "../assets/images/signup.png";
import {auth} from './firebase';
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Signup = () => {
    const emailRef = useRef()
    const passRef = useRef()
    const navigate = useNavigate()

    const handleGoogleSignUp =()=>{
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)
        .then(() => navigate('/'))
        .catch(error => console.log(error.message))
    }

    const handleEmailSignUp =async()=>{
        try{
            const res = await createUserWithEmailAndPassword(auth,emailRef.current.value,passRef.current.value)
            console.log(res)
        }
        catch(error){
            console.log(error.message)
        }
    }
    return ( 
        <div className='signup-div'>
            <form>
                <input 
                    type="email" 
                    placeholder="email@example.com"
                    ref = {emailRef} />
                <input 
                    type="password" 
                    placeholder="your password"
                    ref = {passRef} />
                <button onClick={handleEmailSignUp}>Sign Up</button>

                <small>OR</small>
                <button 
                    className='google-btn'
                    onClick={handleGoogleSignUp}>
                    Continue with Google
                </button>
            </form>
            <img src={sign_image} alt="sign illustration" />
        </div>

     );
}
 
export default Signup;