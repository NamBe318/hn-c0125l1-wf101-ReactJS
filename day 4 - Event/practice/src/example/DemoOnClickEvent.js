import React from 'react';

const DemoOnClickEvent = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log("Button clicked!");
    }

    return(
        <>
            <button onClick={handleClick}>"Click Me!"</button>
        </>
    )
}

export default DemoOnClickEvent;
