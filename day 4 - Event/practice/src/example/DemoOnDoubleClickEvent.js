import React from 'react';

const DemoOnDoubleClickEvent = () => {
    const handleDoubleClick = (e) => {
        e.preventDefault();
        console.log("Double clicked!");
    }

    return(
        <>
            <button onDoubleClick={handleDoubleClick}>Click Me!</button>
        </>
    )
}

export default DemoOnDoubleClickEvent;