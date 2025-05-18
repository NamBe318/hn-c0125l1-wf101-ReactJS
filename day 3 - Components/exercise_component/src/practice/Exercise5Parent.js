import React from "react";
import Child from "./Exercise5Child";

function Parent() {
    const data = {
        name: "Hoang Nam",
        age: "22",
        hobbie: "music"
    }

    return(
        <div>
            <Child DataInfomation={data}></Child>
        </div>
    )
}

export default Parent;