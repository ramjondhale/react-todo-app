import React, { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      { text: todo, completed: false, id: Math.random() * 1000 },
      ...todos,
    ]);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type='text'
        name='todo_input'
        id='todo_input'
        value={todo}
        onChange={handleTodo}
      />
      <button type='submit' className='add'>
        <AiFillPlusSquare />
      </button>
    </form>
  );
}

export default TodoForm;
