import { useRef, useState } from "react";
import "../styles/aside.css"

const Aside = () => {
    const inputRef = useRef()
    const [data,setData] = useState([])

    const fetchData = async()=> {
        try{
            const res = await fetch(` https://app.shrtco.de/v2/shorten?url=${inputRef.current.value}`)
            const data = await res.json()
            setData(data)
            console.log(data);
        }
        catch(error){
            console.log(error.message)
        }
        return data
    }

    const handleSubmit =()=> {
        if (inputRef.current.value === ""){
            document.querySelector('.aside input').style.borderColor= 'red'
        }
        else{
            document.querySelector('.aside input').style.borderColor= 'white'
            fetchData()
        }
    }

    return ( 
        <div className="aside">
            <input 
                type="text" 
                placeholder="Shorten a link here..."
                ref = {inputRef} />
            <button onClick={handleSubmit}>Shorten It!</button>
        </div>
     );
}
 
export default Aside;