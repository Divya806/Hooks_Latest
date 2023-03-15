import React, {useState} from 'react'

function ReducerTutorial() {
    const [counter, setCounter] = useState(0)
    const [showText, setShowText] = useState(true)

    

    return(
        <>
        {counter}
        <div>Hello Reducer</div>
        <button onClick={() => {setCounter(counter + 1); setShowText(false);}}>Click Me</button>
        {showText && <p>This is a hello world</p>}
        </>
    )
}

export default ReducerTutorial