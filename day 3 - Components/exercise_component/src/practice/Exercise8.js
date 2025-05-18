import React from "react";

function Exercise8() {
    function SearchBar() {
        return(
            <div>
            <input type="text" placeholder="Tìm kiếm"></input>
            <button>Tìm</button>
            </div>
        )
    }
    return(
        <>
        {SearchBar()}
        </>
    )
}

export default Exercise8;