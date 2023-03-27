import React from 'react'
class EffectCounterClass extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevState.count !== this.state.count) {
            console.log("updating document title")
        document.title = `You clicked ${this.state.count} times`
        }
    }

    handleClick =() =>{
        this.setState(prevCount => ( {
            count: prevCount.count + 1
        }))
    }

    handleChange =(e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return(
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Click Me {this.state.count}</button>
            </div>
        )
    }
}

export default EffectCounterClass