import React, { useState } from "react";
import TodoForm from "./TodoForm2";
import TodoList from "./TodoList2";

function Todo2() {
  const [tasks, setTasks] = useState(["Hoc ReactJS", "Hoc Python"]);

  const [task, setTask] = useState("");

  const handleAddNewTask = (newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if(task.trim() === "")
    return;
    
    handleAddNewTask(task);
    setTask("");
  };

  return (
    <div>
        <TodoForm setTask={setTask} handleSubmitForm={handleSubmitForm}/>
        <TodoList tasks={tasks}/>
    </div>
  );
}

export default Todo2;
