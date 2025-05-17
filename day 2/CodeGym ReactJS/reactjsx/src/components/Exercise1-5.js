import React from "react";

function Exercise1() {
    const welcome = (
        <h1>Chào mừng đến với React!</h1>
    );

    const user = {
        name: "Hoàng Nam"
    }

    const greeting = (
        <h2>Xin chào, {user.name}!</h2>
    )

    function paragraphRender() {
        return (
            <div>
                <p>Đây là thẻ p trong thẻ div</p>
            </div>
        )
    }
    function math() {
        return (
            <p>kết quả của 2 + 2 là: {2 + 2}</p>
        )
    }

    function list() {
        const listName = ['Alice', 'Bob', 'Charlie']
        return (
            <div>
                <ul>
                    {
                        listName.map((items, index) => (
                            <li key={index}>{items}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    return(
        <div>
            {welcome}
            {greeting}
            {paragraphRender()}
            {math()}
            {list()}
        </div>
    );
}

export default Exercise1;