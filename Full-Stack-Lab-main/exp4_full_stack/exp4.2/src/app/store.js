import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// Configure and create the Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
