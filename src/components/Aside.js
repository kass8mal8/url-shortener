import { useRef } from "react";
import "../styles/aside.css"
import useFetch  from "./useFetch";

const Aside = () => {
    const url = 'https://app.shrtco.de/v2/shorten?url=https://github.com/kass8mal8'
    const inputRef = useRef()
    const res = useFetch(url)
    const handleSubmit =()=> {
        if (inputRef.current.value == " "){

        }
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