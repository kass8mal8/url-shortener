import '../styles/footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faPinterest,faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='footer-intro'>
                <h3> Boost your links today</h3>
                <button>Get Started</button>
            </div>
            <div className='footer-links'>
                <h2>Shortly</h2>
                <div className='features'>
                    <h5>Features</h5>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </div>
                <div className='resources'>
                    <h5>Resources</h5>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </div>
                <div className='resources'>
                    <h5>Company</h5>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </div>
                <div className='socials'>
                    <li><FontAwesomeIcon icon={faFacebookSquare} className = "icons"/></li>
                    <li><FontAwesomeIcon icon={faTwitter} className = "icons"/></li>
                    <li><FontAwesomeIcon icon={faPinterest} className = "icons"/></li>
                    <li><FontAwesomeIcon icon={faInstagram} className = "icons"/></li>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;