import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [count,setCount] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => 
            {
                console.log(res)
                setData(res.data)
            }
        )
        .catch(err =>{console.log(err)})
    })

    return(
        <div>
            <button onClick={()=>setCount(count + 1)}>Click Me {count}</button>
            {
                data.map(post => <div key={post.id}>{post.title}</div>)
            }
        </div>
    )
}

export default DataFetching