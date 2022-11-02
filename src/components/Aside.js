import { useRef, useState } from "react";
import "../styles/aside.css"

const Aside = () => {
    const url = 'https://app.shrtco.de/v2/shorten?url=https://github.com/kass8mal8'
    const inputRef = useRef()
    const [data,setData] = useState([])

    const fetchData = async()=> {
        try{
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
            console.log(data);
        }
        catch(error){
            console.log(error.message)
        }
        return data
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
        if (inputRef.current.value === " "){
            document.querySelector('.aside input').style.borderColor = 'red'
        }
        else{
            fetchData(url)
        }
        inputRef.clear()
    }

    return ( 
        <form className="aside" onSubmit = {handleSubmit}>
            <input 
                type="text" 
                placeholder="Shorten a link here..."
                ref = {inputRef} />
            <button>Shorten It!</button>
        </form>
     );
}
 
export default Aside;