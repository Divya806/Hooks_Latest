import React, {useEffect, useState } from 'react'
import axios from 'axios'

function EffectTutorial() {
    const [counter, setCounter] = useState(0)
    const [ data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>  {
            console.log(response)
            setData(response.data)
        })
        .catch(error => console.log(error))
    })

    return(
      <div>
        {
        data.map(da => <div key={da.id}>{data.id} {da.title}</div>)
        }
        <button onClick={()=>setCounter(counter + 1)}>Click Me</button>
      </div>
    )

}

export default EffectTutorial