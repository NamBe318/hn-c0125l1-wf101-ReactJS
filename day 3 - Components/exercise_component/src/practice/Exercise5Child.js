import React from "react";

function Child(props) {
    return(
        <div>
            <h1>Component con</h1>
            <p>Tên: {props.DataInfomation.name}</p>
            <p>Tuổi: {props.DataInfomation.age}</p>
            <p>Sở thích: {props.DataInfomation.hobbie}</p>
        </div>
    )
}

export default Child;