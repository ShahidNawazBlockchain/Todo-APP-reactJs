import React, { useState } from "react";

function EditTodo({ task, editTodo }) {
  const [value, setvalue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setvalue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="Update task"
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
}

export default EditTodo;
