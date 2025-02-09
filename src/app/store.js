import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/TodoApi/TodoApiSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;