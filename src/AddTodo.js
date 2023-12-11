import React, { useState } from "react";

function AddTodo( {addTodo}) {
    const [value , setvalue] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(value); 
        setvalue("");
    }
  return (
    
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          className="todo-input"
          placeholder="what is the task todo"
          onChange={(e)=>{setvalue(e.target.value)}}
        />
        <button type="submit" className="todo-btn">
          
          Add Task
        </button>
      </form>
    
  );
}

export default AddTodo;
