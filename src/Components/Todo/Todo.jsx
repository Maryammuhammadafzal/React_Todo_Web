import React from 'react'
import AddTodo from './Todorows/AddTodo/AddTodo'
import ProgressTodo from './Todorows/ProgressTodo/ProgressTodo'
import CompleteTodo from './Todorows/CompleteTodo/CompleteTodo'

const Todo = () => {
  return (
    <div className='flex'>
      <AddTodo/>
      <ProgressTodo/>
      <CompleteTodo/>
    </div>
  )
}

export default Todo
