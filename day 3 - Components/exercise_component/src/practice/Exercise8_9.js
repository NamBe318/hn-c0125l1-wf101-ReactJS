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
    
    function Alert(props) {
        let bgColor;

        switch (props.type) {
            case "success": 
                bgColor = "green";
                break;
            case "warning":
                bgColor = "yellow";
                break;
            case "error":
                bgColor = "red";
                break;
            default:
                bgColor = "white";
        }
        
        const style = {
            backgroundColor: bgColor,
            padding: "25px",
            borderRadius: "10px",
            marginTop: "10px"
        }

        return(
            <div style={style}>{props.message}</div>
        )
    }

    return(
        <>
        <SearchBar/>
        <Alert type="success" message="Tìm kiếm thành công!"/>
        <Alert type="warning" message="Lỗi cú pháp!"/>
        <Alert type="error" message="Tìm kiếm thất bại!"/>
        </>
    )
}

export default Exercise8;