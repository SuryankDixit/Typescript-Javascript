import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    changeCount(cnt) {
        // this.setState({
        //     count: cnt + this.state.count
        // }, function () {
        //     console.log("Inside Callback count: " + this.state.count);
        // });
        // console.log("Outside Callback count: " + this.state.count);


        //"Using arrow functions with object literals: If you are returning an object literal, it needs to be wrapped in parentheses. This forces the interpreter to evaluate what is inside the parentheses, and the object literal is returned 
        // (example: x => ({ y: x })  ) "

        this.setState((prevState, props) => ({
            count: prevState.count + cnt
        }))
    }

    // React may group multiple setState calls into Single Calls for performance reasons
    changeCountFive() {
        console.log(this);
        this.changeCount(1);
        console.log(this);
        this.changeCount(1);
        this.changeCount(1);
        this.changeCount(1);
        this.changeCount(1);
    }

    render() {
        return (
            <div>
                <h1>Welcome to Count Button Module</h1>
                <p>This total count is {this.state.count}</p>
                <button onClick={() => { this.changeCount(1) }}>Increment 1</button>
                <button onClick={() => { this.changeCount(-1) }}>Decrement 1</button>
                <button onClick={() => { this.changeCountFive() }}>Increment 5</button>
            </div>
        )
    }
}

export default Counter
