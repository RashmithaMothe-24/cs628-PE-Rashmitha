import React from "react";

function TodoItem({ task, index, removeTask }) {
  return (
    <li>
      <span>{task}</span>
      <button className="delete-btn" onClick={() => removeTask(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
