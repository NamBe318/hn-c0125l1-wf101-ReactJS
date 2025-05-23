import React from "react";

function Child(props) {
    return(
        <button onClick={props.handleClick}>Click me!</button>
    )
}

export default Child;