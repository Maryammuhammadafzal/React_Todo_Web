import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
