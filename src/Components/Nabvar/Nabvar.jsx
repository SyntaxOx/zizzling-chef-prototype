import './NavBar.css'

import { Link } from 'react-scroll';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    var linkSettings = {
        smooth: true,
        duration: 500
    }

    const [navBGC, setnavBGC] = useState(false);
    const changeBGC = () => {
        if (window.scrollY > 60) {
            setnavBGC(true)
        } else {
                setnavBGC(false)
        }
    };

    window.addEventListener('scroll', changeBGC);

    const GoToprofile = useNavigate();

    const profile = () => {
        GoToprofile('/profile');
    }

    const GoToLoginPage = useNavigate();
    const LogInSignUp = () => {
        GoToLoginPage('/login');
    }

    return (
        <>
            <nav className={navBGC == true ? "Navbar active" : "Navbar"}>
                <div className="Logo">
                    <img className="NavLogo" src="/zizzlingChef/Logo.jpg" alt="Zizzling Chef"/>
                </div>

                <div className="NavList">
                    <li className='Navs'><Link to='home' {...linkSettings}>Home</Link></li>
                    <li className='Navs'><Link to='blog' {...linkSettings}>Blog</Link></li>
                    <li className='Navs'><Link to='event' {...linkSettings}>Event</Link></li>
                    <li className='Navs'><Link to='contact' {...linkSettings}>Contact</Link></li>
                    <li className='Navs' onClick={LogInSignUp}>You</li>
                </div>
            </nav>
        </>
    )
}
