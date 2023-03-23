import React, { useLayoutEffect, useEffect, useRef} from 'react'

//Whenever we have content that needs to be executed even before the code of useEffect is excuted we put
// in useLayout, generally useLyout executed first complared to useEFfect placed wherever

function LayoutEffectTutorial(){
    const inputRef = useRef(null);

    useEffect (() => {
        inputRef.current.value="HELLo"
        console.log("useEFfect called")
    },[])

    useLayoutEffect (() => {
        console.log("useLayoutEffect used")
    },[])


    return(
        <div className="app">
            <input ref={inputRef} value="Pedro" style={{width: 400, height: 300}} />
        </div>
    )
}

export default LayoutEffectTutorial

