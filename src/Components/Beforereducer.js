import React, { useState } from 'react'

function Beforereducer() {

    const [ counter, setCounter ] = useState(0);
    const [ showText, setShowText ] = useState(true);
    
    return(
        <div>
             <button onClick={() => {setCounter(counter + 1); setShowText(!showText)}}>Click Me {counter}</button>
             {showText && <p>This is a supertext</p>}
        </div>
    )
}

export default Beforereducer