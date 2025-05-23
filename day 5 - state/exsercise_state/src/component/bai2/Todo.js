import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [Tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...Tasks, task]);
  };

  return (
    <div>
      <h1>Việc cần làm</h1>
      <TodoForm onAddTask={addTask}/>
      <TodoList Tasks={Tasks}/>
    </div>
  );
};
export default Todo;
