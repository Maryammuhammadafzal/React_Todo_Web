import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from '../Features/TodoApi/TodoApiSlice';


const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});


export default store;