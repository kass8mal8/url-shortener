import { useNavigate } from 'react-router-dom';
import '../styles/footer.css'

const Boost = () => {
    const navigate = useNavigate()

    return ( 
        <div className='footer-intro'>
            <h3> Boost your links today</h3>
            <button onClick={() =>navigate('./signup')}>Get Started</button>
        </div>
     );
}
 
export default Boost;