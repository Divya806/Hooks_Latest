import React, {useReducer} from 'react'

const reducer = (state,action) =>{
    switch(action.type) {
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText}
        case "toggleShowtext":
            return {count: state.count + 1, showText: !state.showText }
        default :
            return state
        }
    }

function ReducerTutorial (){
    const [state, dispatch] = useReducer(reducer,{count: 0, showText: true})

    return(
        <div>
            <button onClick={() => {dispatch({type: "INCREMENT"}) ; dispatch({type:"toggleShowtext"})}}>Click Me {state.count}</button>
            {state.showText && <p>This is atext</p>}
        </div>
    )

}

export default ReducerTutorial