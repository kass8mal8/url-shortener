import logo from '../assets/images/logo.svg'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"

const Header = () => {
    const toggleNavigation = () => {
        document.querySelector('.header nav').classList.toggle('active')
    }
    return (  
        <div className='header'>
            <ul>
                <li><img src={logo} alt='logo' className='logo' /></li>
                <li>
                    <FontAwesomeIcon icon = {faBars} className ="menu" onClick = {toggleNavigation}/>
                </li>
                <nav>
                    <li className='btm-nav'>Features</li>
                    <li className='btm-nav'><Link to = "/pricing">Pricing</Link></li>
                    <li className='btm-nav'>Resources</li>
                    <aside>
                        <li>Login</li>
                        <li><button>Sign Up</button></li>
                    </aside>
                </nav>
            </ul>
        </div>
    );
}
 
export default Header;