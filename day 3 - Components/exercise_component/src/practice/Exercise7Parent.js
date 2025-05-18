import React from "react";

function PostItem(props) {
    return(
        <div>
            <h1>Tiêu đề: {props.title}</h1>
            <h3>Ngày: {props.date}</h3>
            <p>{props.excerpt}</p>
        </div>
    )
}

export default PostItem;