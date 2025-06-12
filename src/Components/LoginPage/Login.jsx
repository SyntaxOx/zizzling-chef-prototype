import './Login.css'

import { useState } from 'react'

import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

export default function Login() {


    const [show, setshow] = useState(false);
    const [signUp, setSignUp] = useState('none');
    const [logIn, setLogIn] = useState('flex');

    const UnReveal = () => {
        setshow(!show)
    }

    const GoSignup = () => {
        setSignUp('flex');
        setLogIn('none');
    }

    const GoLogin = () => {
        setLogIn('flex');
        setSignUp('none');
    }

    return (
        <>
            <div id="PageContainer">
                <div className="LogInPageTitle">
                    <img src="/zizzling-chef-prototype/Logo.jpg" alt="Zizzling Chef" className='LogInPageLogo'/>
                    <h1 className='LogInPageBusinessName'>Zizzling Chef</h1>
                    <h2 className='LogInPageSubHeading'>The Original and Traditional Restaurant</h2>
                </div>

                <div className="loginBox" style={{display: logIn}}>
                    <h2  className='LoginTitle'>Login</h2>
                    <div className="inputUserName">
                        <span><FaUser className="FaUser"/></span>
                        <input type="text" placeholder="Username" className='UserInput' />                        
                    </div>
                    <div className="inputPassWord">
                        <span><FaLock className="FaLock"/></span>
                        <input type={show ? "text" : "password"} placeholder="Password"  className='UserInput'/>
                        <span onClick={UnReveal} className="passEye">
                            {show ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>}
                        </span>
                    </div>
                    <a href="#" className='ForPass'>Forgot Password?</a>
                    <button className='LoginButton'>Login</button>
                    <p className='CreateAccount'>Create an account?</p>
                    <button className='GoSignup' onClick={GoSignup}>Sign up</button>
                </div>

                <div className="signupBox" style={{display: signUp}}>
                    <h2 className='SignupTitle'>Sign Up</h2>
                    <div className="inputEmailAdd">
                        <span><BiLogoGmail className="BiLogoGmail"/></span>
                        <input type="text" placeholder="Email Address" className='UserInput' />                        
                    </div>
                    <div className="inputNewUserName">
                        <span><FaUser className="FaUser"/></span>
                        <input type="text" placeholder="Username" className='UserInput' />                        
                    </div>
                    <div className="inputMobileNumber">
                        <span><FaPhoneAlt className="LoginPage_FaPhoneAlt"/></span>
                        <input type="number" placeholder="Mobile Number" className='UserInput'/>                        
                    </div>
                    <div className="inputNewPass">
                        <span><FaLock className="FaLock"/></span>
                        <input type="password" placeholder="Password" className='UserInput' />
                        <span onClick={UnReveal} className="passEye">
                            {show ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>}
                        </span>                      
                    </div>
                    <div className="inputConfirmPass">
                        <span><FaLock className="FaLock"/></span>
                        <input type="pardword" placeholder="Password" className='UserInput' />
                        <span onClick={UnReveal} className="passEye">
                            {show ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>}
                        </span>                      
                    </div>
                    <button className='SignupButton'>Sign up</button>
                    <p className='HaveAccount'>Already have an account?</p>
                    <button className='GoLogin' onClick={GoLogin}>Login</button>
                </div>
            </div>
        </>
    )
}
