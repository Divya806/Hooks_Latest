import React, {useState, useEffect} from 'react'

function EffectCounterFunc() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log('updating document title')
        document.title= `this is ${count} times`
    },[count])

    return(
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={()=>setCount(count+1)}>Click Me {count}</button>
        </div>
    )
}

export default EffectCounterFunc