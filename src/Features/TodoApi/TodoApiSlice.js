import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [], // Changed from value to todos to store the list
  status: 'idle', // To track API call status
  state : true,
  error: null, // To handle errors
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    displayLandingPage: (state) => {
      console.log("Before update:", state.state); 
      state.state = false; 
      console.log("After update:", state.state); 
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos[index] = { ...state.todos[index], ...updatedTodo };
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    // Reducers for async actions
    fetchTodosStart: (state) => {
      state.status = 'loading';
    },
    fetchTodosSuccess: (state, action) => {
      state.status = 'succeeded';
      state.todos = action.payload;
    },
    fetchTodosFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});




export const {
  displayLandingPage,
  addTodo,
  updateTodo,
  deleteTodo,
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFailure,
} = todoSlice.actions;

export default todoSlice.reducer;
