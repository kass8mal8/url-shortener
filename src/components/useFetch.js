import {useEffect, useState} from 'react'

const useFetch =async (url) => {
    const [data,setData] = useState([])
    useEffect( () => {
        const fetchData = async() =>{
            try {
                const response = await fetch(url)
                const data = response.json()
                setData(data)
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData()
    },[url,data])
    console.log(data);
}
 
export default useFetch;