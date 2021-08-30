import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
        console.log(this);
        this.state = {
            message: "You do"
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        console.log(this);
        this.setState({
            message: "Yup, you did"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message} Event Binding- this keyword</h1>
                {/* <button onClick={this.clickHandler}>Submit</button> error */}
                {/* <button onClick={this.clickHandler.bind(this)}>Submit</button>  */}
                {/* <button onClick={() => { return this.clickHandler() }}>Submit</button> */}
                {/* <button onClick={() => this.clickHandler()}>Submit</button> */}
                {/* Binding in the constructor */}
                <button onClick={this.clickHandler}> Submit</button>
                {console.log(this)}
            </div >
        )
    }
}

export default EventBind
