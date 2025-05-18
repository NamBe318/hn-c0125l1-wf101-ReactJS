import React from "react";

function Exercise6() {

function LoginStatus({isLoggedIn}) {
    return(
        <h2>
        {isLoggedIn ? "Đã đăng nhập" : "Chưa đăng nhập"}
        </h2>
    )
}

return(
    <>
    <LoginStatus isLoggedIn={true}/>
    <LoginStatus isLoggedIn={false}/>
    </>
)

}

export default Exercise6;