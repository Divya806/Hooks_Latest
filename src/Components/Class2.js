import React from 'react'

class Class2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name:''
        }
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    componentDidMount() {
        document.title =`You clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevState.count !== this.state.count){
            console.log('updating title')
        document.title =`You clicked ${this.state.count} times`
        }
    }

    render() {
        return(
            <div>
                <input type="text"  value={this.state.name}  onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Click {this.state.count} times</button>
            </div>
        )
    }
}

export default Class2