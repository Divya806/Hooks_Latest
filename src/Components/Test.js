import React, {useState} from 'react'

function Test() {
    const initialCount = 0
    const [count, setCount] = useState(0)

    const incrementFive = () => {
        for(let i=0;i<5;i++) {
            setCount(prevCount=> prevCount + 1)
        }
    }

    return(
        <div>
            {count}
            <button onClick={() =>setCount(initialCount)}>Reset {count}</button>
            <button onClick={()=> setCount(count+1)}>Increment {count}</button>
            <button onClick={()=> setCount(count-1)}>Decrement {count}</button>
            <button onClick={incrementFive}>incrementFive</button>
        </div>
    )

}

export default Test