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

  // useEffect(() => {
  //   ;
  //   console.log(dispatch(fetchTodos()));
    
  // }, [dispatch]);
  // dispatch(fetchTodos())
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
console.log(status);

  return (
    <div className='flex'>
      {status === "loading" ? (<p>Loading...</p>) : null && status === "failed"  ? (<p>Error : {error}</p>) : null && 
       status === "succeeded" ? dispatch(fetchTodos()) && (
         <>
         {
         todos.map((item)=>{
          console.log(item);
          
          item.completed === "true" ? (<CompleteTodo completed={item}/>) : item.completed === "false" ? (<ProgressTodo progress={item}/>) : (<AddTodo new={item}/>)
         })} 
       </>
       ) : null }
    </div>
  )
}

export default Todo

