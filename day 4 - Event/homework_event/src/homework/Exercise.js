import React from 'react';

function Exercise() {
    function Button1() {
        const handleGreeting = () => {
            console.log("Hello, React!");
        }

        return(
            <div>
                <button onClick={handleGreeting}>Click me!</button>
            </div>
        )
    }

    return(
        <Button1/>
    )
}
 export default Exercise;