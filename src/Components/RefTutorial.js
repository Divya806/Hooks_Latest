import React, {useRef} from 'react'

function RefTutorial() {

    const inputRef = useRef(null)
 
    const onClick = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
        inputRef.current.value="";
    }

    return(
        <>
        <input type="text" placeholder="ex-pedro....."  ref={inputRef} />
        <div>useRef in functional COmponent</div>
        <button onClick={onClick}>Click Me</button>
        </>
    )
}

export default RefTutorial