import React from "react";

function Exercise1_4(){
    function BasicComponent() {
        return(
            <>
            <h1>Xin chào React!</h1>
            </>
        )
    }

    function TheName(props){
        return(
            <h1>Xin chào, {props.name}</h1>
        )
    }

    function AgeDisplay({age}){
        return(
            <p>Tuổi của bạn là: {age}</p>
        )
    }

    function Greeting({message = "Xin Chào"}) {
        return(
            <h2>{message}</h2>
        )
    }

    return(
        <>
        <BasicComponent/>
        <TheName name = "Nam"/>
        <AgeDisplay age = {22}/>
        <Greeting/>
        </>
    )
}

export default Exercise1_4;