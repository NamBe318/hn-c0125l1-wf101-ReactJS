import React from "react";

function ShowMessage(props) {
    return(
        <>
        <h1>{props.menuInformation.title}</h1>
        <p>{props.menuInformation.description}</p>
        <p>{props.menuInformation.price}</p>
        <ul>
            {props.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        </>
    )
}

export default ShowMessage;