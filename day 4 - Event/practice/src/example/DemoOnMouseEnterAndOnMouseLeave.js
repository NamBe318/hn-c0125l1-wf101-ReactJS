import React from "react";

function DemoOnMouseEnterAndOnMouseLeave() {
    const handleMouseEnter = () => {
        console.log("Mouse enter");
    }

    const handleMouseLeave = () => {
        console.log("Mouse leave");
    }

    return(
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Di chuot vao toi</div>
    )
}

export default DemoOnMouseEnterAndOnMouseLeave;