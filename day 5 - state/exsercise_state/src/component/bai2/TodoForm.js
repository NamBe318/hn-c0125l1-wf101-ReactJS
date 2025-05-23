import React, { useState } from "react";

const TodoForm = (props) => {
  const [InputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (InputValue.trim()) {
      props.onAddTask(InputValue.trim());
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nhập việc cần làm.."></input>
          <br></br>
        <button type="submit">Thêm công việc</button>
      </form>
    </>
  );
};

export default TodoForm;
