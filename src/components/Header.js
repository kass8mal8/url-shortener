import logo from '../assets/images/logo.svg'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (  
        <div className='header'>
            <ul>
                <li><img src={logo} alt='logo' className='logo' /></li>
                <li>
                    <FontAwesomeIcon icon = {faBars} className ="menu"/>
                </li>
                <nav>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
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