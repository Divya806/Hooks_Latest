import React, {useState} from 'react'

function Button(){
    const [toggle, setToggle] = useState(false)

    return(
        <div>
            {toggle && <p>Toggle</p>}
            <button onClick={()=> setToggle(!toggle)}>Click Me</button>
        </div>
    )
}

export default Button