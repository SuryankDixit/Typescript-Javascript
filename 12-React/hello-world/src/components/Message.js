import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();    // calling base class constructor;
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for Subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message} from Message Component</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;