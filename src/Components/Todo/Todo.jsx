import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../../thunks/TodoThunks/todoThunks';

import AddTodo from './Todorows/AddTodo/AddTodo'
import ProgressTodo from './Todorows/ProgressTodo/ProgressTodo'
import CompleteTodo from './Todorows/CompleteTodo/CompleteTodo'

const Todo = () => {
  const dispatch = useDispatch();
  const { todos, status, error } = useSelector((state) => state.todo);
console.log(todos);

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch]);
  // dynamic object creation
  const completedTodos = todos.reduce((acc, item) => {
    if (item.completed) {
      acc[item.id] = item; // Use a unique identifier as the key  
    }
    return acc;
  }, {})



  const progressTodos = todos.reduce((acc, item) => {
    if (item.completed === false) {
      acc[item.id] = item; // Use a unique identifier as the key
    }
    return acc;
  }, {});
  
  console.log('Completed Todos Object:', progressTodos);

  // if (status === 'loading') return <p>Loading...</p>;
  // if (status === 'failed') return <p>Error: {error}</p>;
 // console.log(status);

  return (
    <div className='flex'>
      {status === "loading" ? (<p>Loading...</p>) : null || status === "failed"  ? (<p>Error : {error}</p>) : null || 
       status === "succeeded" ?
        Object.values(completedTodos).map((todo) => {
        console.log('Mapping Completed Todo:', todo);
        // Render a component or perform further operations
        return <CompleteTodo key={todo.id} completed={todo} />;
      }): null }
    </div>
  )
}

export default Todo

