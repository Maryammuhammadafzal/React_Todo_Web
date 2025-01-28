import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../redux/thunks/todoThunks';

import AddTodo from './Todorows/AddTodo/AddTodo'
import ProgressTodo from './Todorows/ProgressTodo/ProgressTodo'
import CompleteTodo from './Todorows/CompleteTodo/CompleteTodo'

const Todo = () => {
  const dispatch = useDispatch();
  const { todos, status, error } = useSelector((state) => state.todo);
console.log(todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className='flex'>
      <AddTodo/>
      <ProgressTodo/>
      <CompleteTodo/>
    </div>
  )
}

export default Todo

