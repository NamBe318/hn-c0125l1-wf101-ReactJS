import React from "react";

const InputBox = (props) => {
    const handleChange = (e) => {
        props.onInputChange(e.target.value);
    };

    return(
        <input
        type="text"
        placeholder="Nhập tên người dùng"
        onChange={handleChange}
      ></input>
    )
}

export default InputBox;