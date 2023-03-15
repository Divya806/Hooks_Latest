import React, {useState, useEffect} from 'react'
import axios from 'axios';

function EffectTutorial1() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState("")
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data[0].title)
            setData(response.data[0].title)
        })
        .catch(error=>{
            console.log(error)
        })
    },[count])

    const handleClick = () => {
        setCount(prevCount =>prevCount + 1)
    }

    return(
        <>
        <div>Hello world {data}</div>
        <button onClick={handleClick}>Click Me {count}</button>
        </>
    )

}

export default EffectTutorial1