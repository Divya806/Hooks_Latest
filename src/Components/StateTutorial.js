import React,{ useState } from 'react'

function StateTutorial(){
    const [inputValue, setInputValue] = useState("");

    const onChange = (event) => {
        const newValue= event.target.value
        setInputValue(newValue);
    }

    return(
        <>
        <div>StateTutorial</div>
        <input type="text"  onChange={onChange} placeholder="Enter something...."/>{inputValue}
        </>
    )
}

export default StateTutorial