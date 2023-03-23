import React, {useState,forwardRef, useImperativeHandle} from 'react'

const Button = forwardRef((props,ref ) => {
  const [toggle, setToggle] = useState(true)

   useImperativeHandle(ref, () => ({
            alterToggle() {
            setToggle(!toggle);
            }
   }))
  return(
    <div>
        <button onClick={()=>setToggle(!toggle)}>Click Me</button>
        {toggle && <p>toggle</p>}
    </div>
  )
})

export default Button