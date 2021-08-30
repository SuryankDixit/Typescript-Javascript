import React from 'react';

// const Greet = ({firstName,lastName}) =>{}
const Greet = (props) => {
    const { firstName, lastName } = props;
    return (
        <div>
            <h1>Hello {firstName} {lastName} from Function Component</h1>
            {props.children}
        </div>
    )
}
export default Greet;