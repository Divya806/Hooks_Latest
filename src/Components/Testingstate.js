import React, {useState} from 'react'

function TestingState(){

    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return(
        <>
        <div>Hello world {counter}</div>
        <button onClick={handleClick}>Counter {counter} times</button>
        </>
    )

}

export default TestingState