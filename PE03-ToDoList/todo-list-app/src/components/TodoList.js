import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTask }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {todos.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {todos.map((task, index) => (
            <TodoItem key={index} index={index} task={task} removeTask={removeTask} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
