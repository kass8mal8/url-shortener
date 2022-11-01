import '../styles/article.css'
import brand from '../assets/images/icon-brand-recognition.svg'
import detailed from '../assets/images/icon-detailed-records.svg'
import customize from '../assets/images/icon-fully-customizable.svg'

const Article = () => {
    return ( 
        <div className='article'>
            <article>
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our 
                advanced statistics dashboard.</p>
            </article>
            <div className='products'>
                <nav>
                    <img src={brand} alt="" />
                    <h3>Brand Recognition</h3>
                    <p>
                        Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                    </p>
                </nav>

                <nav>
                    <img src={detailed} alt="" />
                    <h3>Detailed Records</h3>
                    <p>
                    Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                    </p>
                </nav>

                <nav>
                    <img src={customize} alt="" />
                    <h3>Fully Customizable</h3>
                    <p>
                    Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                    </p>
                </nav>
            </div>
        </div>
     );
}
 
export default Article;