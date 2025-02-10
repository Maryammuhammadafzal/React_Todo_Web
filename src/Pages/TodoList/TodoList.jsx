import React from 'react';
import { useSelector } from 'react-redux';
import { fetchTodosSuccess } from '../../Features/TodoApi/TodoApiSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);
  let data = fetchTodosSuccess()
   console.log(data);
   
  return (
    <div className="todo-list w-100 h-[600px] bg-amber-400">
      
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
