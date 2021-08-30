import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log("Button Clicked");
    }

    return (
        <div>
            <h1>Event Handling from Function</h1>
            {/* pass function as an event handler */}
            <button onClick={clickHandler} >Click</button>
        </div>
    )
}

export default FunctionClick
