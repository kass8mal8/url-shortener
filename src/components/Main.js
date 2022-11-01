import working from '../assets/images/working.svg'
import '../styles/main.css'

const Main = () => {
    return (  
        <div className = "main">
            <div>
                <img src={working} alt="working illustration" />
            </div>
            <div className = "main-intro"> 
                <h1>More than just shorter links</h1>
                <p> 
                    Build your brand’s recognition and get detailed insights on how your links are performing.
                </p>
                <button>Get Started</button>

            </div>
        </div>
    );
}
 
export default Main;