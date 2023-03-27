import React from 'react'

class Effect1 extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            count : 0
        }
    }

    handleClick =() => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    componentDidMount (){
        document.title = `You clicked ${this.state.count} times`
    }

    
    componentDidUpdate (){
        document.title = `You clicked ${this.state.count} times`
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Clicked {this.state.count} times</button>
            </div>
        )
    }

}

export default Effect1