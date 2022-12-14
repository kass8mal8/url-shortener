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

    const handleGoogleSignUp = async()=>{
        const provider = new GoogleAuthProvider()
        try{
            await signInWithPopup(auth,provider)
            navigate('/')
        }
        catch(error){
            console.log(error.message);
        }
    }

    const handleEmailSignUp =async()=>{
        try{
            await createUserWithEmailAndPassword(auth,emailRef.current.value,passRef.current.value)
            navigate('/')
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
            <div className='signup-welcome'>
                <p>
                    At Shortly, cutomer satisfaction is our priority.<br/>We are tailored to provide best services for you.<br/>
                    Get started with ease...
                </p>
                <img src={sign_image} alt="sign illustration" />
            </div>
        </div>

    );
}
 
export default Signup;