import React, { useEffect, useState } from 'react';

function Example1() {
    // useEffect (() => {
    //     console.log("Chay 1 lan sau khi render");
    // }, {})

    // useEffect (() => {
    //     console.log("Chay sau khi render");
    // })

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
            console.log(count);
        }, 1000);

        return () => clearInterval(timer);
    }, [count])
}

export default Example1;