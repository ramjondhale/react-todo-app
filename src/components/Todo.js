import React from "react";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
function Todo({ todo, todos, setTodos }) {
  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) return { ...todo, completed: !todo.completed };
        return item;
      })
    );
  };

  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <li className='todo_item'>{todo.text}</li>
      <div className='actions'>
        <button className='completed' onClick={handleComplete}>
          <AiFillCheckCircle />
        </button>
        <button className='delete' onClick={handleDelete}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default Todo;
