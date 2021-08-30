import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetparent = this.greetparent.bind(this);
    }

    greetparent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }


    render() {
        return (
            <div>
                <h1>Child Parent Methods as props</h1>
                <ChildComponent greetHandler={this.greetparent} />
            </div>
        )
    }
}

export default ParentComponent
