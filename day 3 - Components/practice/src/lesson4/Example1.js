import React from "react";
import ShowMessage from "./ShowMessage";

function Example() {
    const title = "Hello props";
    const description = "Prop is simple";

    const menuInfo = {
        title: "Hello props!",
        description: "Prop is simple!",
        price: 10
    };

    const menuItem = ["Home", "Profile", "Product", "Contact"];

    return(
        <ShowMessage menuInformation={menuInfo} items={menuItem}/>
    );
}

export default Example;
