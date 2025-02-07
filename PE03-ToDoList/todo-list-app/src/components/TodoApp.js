import React, { useState } from "react";
import TodoList from "./TodoList";
import "../App.css"; 

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2>ToDo List App</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task description"
      />
      <button className="add-btn" onClick={addTask}>Add Task</button>
      <TodoList todos={todos} removeTask={removeTask} />
    </div>
  );
}

export default TodoApp;
