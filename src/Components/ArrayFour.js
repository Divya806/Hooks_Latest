import React, {useState}from 'react'

function ArrayFour() {

    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10 + 1)
        }])
    }

    return(
        <div>
            <button onClick={addItem}>click Me</button>
            <ul>
                {items.map(item => <li>{item.id} {item.value}</li>)}
            </ul>
        </div>
    )
}

export default ArrayFour