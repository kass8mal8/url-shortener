const Card = ({monthly_products,yearly_products,isToggled,setIsToggled}) => {

    const handleToggle = () => {
        if (isToggled === false) {
            setIsToggled(true)
            document.querySelector(".toggle-plan aside").classList.toggle("active")
        }
        else{
            setIsToggled(false)
            document.querySelector(".toggle-plan aside").classList.toggle("active")
        }
    }
    return ( 
        <div className="price-div">
            <nav>
                <h2>Our Pricing</h2>
                <ul>
                    <li>Annually</li>
                    <li>
                        <nav className="toggle-plan">
                            <aside onClick={handleToggle} id = "toggle"> {""} </aside>
                        </nav>
                    </li>
                    <li>Monthly</li>
                </ul>
            </nav>
            {isToggled ? 
            <div className="card-layout">
                    {yearly_products.map(yearly_product => (
                    <div className="card" key = {yearly_product.id} >
                        <h4> {yearly_product.plan} </h4>
                        <h2> {yearly_product.amount} </h2>
                        <p> {yearly_product.storage} </p>
                        <p> {yearly_product.users} </p>
                        <p> {yearly_product.send} </p>
                        <button> LEARN MORE </button>
                    </div>))}
            </div> : 
            
            <div className="card-layout">
                    {monthly_products.map(monthly_product => (
                    <div className="card" key={monthly_product.id}>
                        <h4> {monthly_product.plan} </h4>
                        <h2> {monthly_product.amount} </h2>
                        <p> {monthly_product.storage} </p>
                        <p> {monthly_product.users} </p>
                        <p> {monthly_product.send} </p>
                        <button className="button" > LEARN MORE </button>
                    </div> ))}
            </div>
            }
        </div>
     );
}
 
export default Card;