import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './features/todos/TodoSlices';
import authSlice, { loadUserFromStorage } from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    auth: authSlice,
  },
});

export { loadUserFromStorage };