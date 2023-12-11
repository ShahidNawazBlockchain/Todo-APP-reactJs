import { useState } from "react";
import React from "react";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
uuidv4();
function TodoWrapper() {
  const [todos, SetTodos] = useState([]);

  const addTodo = (todo) => {
    SetTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        complete: false,
        isEditing: false,
      },
    ]);
  };
  console.log(todos);
  const toggleComplete = (id) => {
    SetTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    SetTodos(todos.filter((todo) => todo.id !== id));
  };
  // const editTodo = (id) => {
  //   SetTodos(
  //     todos.map((todo) =>
  //       todo.id == id ? { ...todo, isEditing: !todo.isEditing } : todo
  //     )
  //   );
  // };
  return (
    <div className="TodoWrapper">
      <h1>Todo</h1>
      <AddTodo addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo
          task={todo}
          key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoWrapper;

// editTodo={editTodo}
