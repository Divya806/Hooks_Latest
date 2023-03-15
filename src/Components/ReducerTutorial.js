import React, {useReducer} from 'react'

const reducer =(state, action ) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1, showText: state.showText}
        case "toogletext":
            return {
                count: state.count, showText: !state.showText
            }
            default:
                return state
    }
}

function ReducerTutorial() {
   const [state, dispatch] = useReducer(reducer, {count: 0 , showText: true})


    return(
        <>
        {state.counter}
        <div>Hello Reducer</div>
        <button onClick={() => {
        dispatch({type: "INCREMENT"});
        dispatch({type: "toogletext"});
        }}>Click Me</button>
        {state.showText && <p>This is a hello world</p>}
        </>
    )
}

export default ReducerTutorial