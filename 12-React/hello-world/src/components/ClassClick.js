import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler() {
        console.log("Button Clicked from class");
    }

    render() {
        return (
            <div>
                <h1>Event Handling from Class</h1>
                <button onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}

export default ClassClick
