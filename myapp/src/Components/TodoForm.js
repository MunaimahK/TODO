import React from "react";
import { useState } from "react";
import "./TodoForm.css";

const addTask = (e) => {
  e.preventDefault();
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);

    setValue("");
  };
  return (
    <div class="container">
      <form class="todo-app" onSubmit={handleSubmit}>
        <h2>To-Do List</h2>
        <div class="row">
          <input
            type="text"
            id="input-box"
            value={value}
            placeholder="Add your next task"
            onChange={(e) => setValue(e.target.value)}
          />
          <button class="btn" type="submit">
            Add!
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
