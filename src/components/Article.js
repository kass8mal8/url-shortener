import '../styles/article.css'
import brand from '../assets/images/icon-brand-recognition.svg'
import detailed from '../assets/images/icon-detailed-records.svg'
import customize from '../assets/images/icon-fully-customizable.svg'

const Article = () => {
    const products = [
        {src:brand,h3:'Brand Recognition',p:'Track how your links are performing across the web with our advanced statistics dashboard.',id:1},
        {src:detailed,h3:'Detailed Records',p:'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',id:2},
        {src:customize,h3:'Fully Customizable',p:'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',id:3}
    ]
    return ( 
        <div className='article'>
            <article>
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our 
                advanced statistics dashboard.</p>
            </article>
            <div className='products'>
                {products.map(product => (
                    <nav>
                        <img src={product.src} alt={product.h3} />
                        <h3>{product.h3}</h3>
                        <p>{product.p}</p>
                    </nav>
                ))}
            </div>
        </div>
     );
}
 
export default Article;