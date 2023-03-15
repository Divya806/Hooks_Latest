import React, { useLayoutEffect, useEffect} from 'react'

//Whenever we have content that needs to be executed even before the code of useEffect is excuted we put
// in useLayout, generally useLyout executed first complared to useEFfect placed wherever

function LayoutEffectTutorial(){
    useEffect (() => {
        console.log("useEFfect called")
    })

    useLayoutEffect (() => {
        console.log("useLayoutEffect used")
    })


    return(
        <div>
            UseLayoutComponent
        </div>
    )
}

export default LayoutEffectTutorial

