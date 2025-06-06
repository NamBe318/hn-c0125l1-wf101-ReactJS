import React, { useEffect } from "react";

function Example2() {
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("Tick...");
    //     }, 2000);

    //     console.log("Time da duoc thiet lap");

    //     return() => {
    //         clearInterval(timer);
    //         console.log("Clean useEffect");
    //     }
    // });

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Tick...");
        }, 2000);

        console.log("Time da duoc thiet lap");

        return() => {
            clearTimeout(timer);
            console.log("Clean useEffect");
        }
    });
}

export default Example2;