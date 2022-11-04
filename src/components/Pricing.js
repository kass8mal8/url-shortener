import Card from './Card'
import '../styles/pricing.css'

const Pricing = ({isToggled,setIsToggled}) => {
    const monthly_products = [
        {
            plan : "Basic",
            amount : "$19.99",
            storage : "500 GB Storage",
            users : "2 users allowed",
            send :"Send up to 3 GB",
            id : 1
        },

        {
            plan : "Proffesional",
            amount : "$24.99",
            storage : "1 TB Storage",
            users : "5 users allowed",
            send :"Send up to 10 GB",
            id : 2
        },
        
        {
            plan : "Master",
            amount : "$39.99",
            storage : "2 TB Storage",
            users : "10 users allowed",
            send :"Send up to 20 GB",
            id :3
        }
    ]

    const yearly_products = [
        {
            plan : "Basic",
            amount : "$199.99",
            storage : "500 GB Storage",
            users : "2 users allowed",
            send :"Send up to 3 GB",
            id : 1
        },

        {
            plan : "Proffesional",
            amount : "$249.99",
            storage : "1 TB Storage",
            users : "5 users allowed",
            send :"Send up to 10 GB",
            id : 2
        },
        
        {
            plan : "Master",
            amount : "$399.99",
            storage : "2 TB Storage",
            users : "10 users allowed",
            send :"Send up to 20 GB",
            id :3
        }
    ]

    return ( 
        <div>
            <Card 
                monthly_products = {monthly_products}
                yearly_products = {yearly_products}
                isToggled = {isToggled}
                setIsToggled = {setIsToggled} />
        </div>
     );
}
 
export default Pricing;