import React from "react";

function DemoOnSubmit() {
    const handleSubmitForm = (e) => {
        e.preventDefault();
        alert("Form submited")
    }

    return(
        <>
        <form onSubmit={handleSubmitForm}>
            <input type="text" placeholder="Type anything..."></input>
            <button>Submit form</button>
        </form>
        </>
    )
}

export default DemoOnSubmit;