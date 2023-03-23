import React, {useState} from 'react'

function StateTutorial() {
  const [inputValue, setInputValue] = useState("pedro")

  const onChange =(event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  return(
    <div>
        <input type="text" onChange={onChange} /> {inputValue}
    </div>
  )
}

export default StateTutorial