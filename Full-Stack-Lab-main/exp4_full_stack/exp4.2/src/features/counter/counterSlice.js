import { createSlice } from '@reduxjs/toolkit';

// Initial state for the counter
const initialState = {
  value: 0,
  history: []
};

// Create a slice with reducers and actions
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Increment counter by 1
    increment: (state) => {
      state.value += 1;
      state.history.push({ action: 'increment', value: state.value, timestamp: new Date().toISOString() });
    },
    // Decrement counter by 1
    decrement: (state) => {
      state.value -= 1;
      state.history.push({ action: 'decrement', value: state.value, timestamp: new Date().toISOString() });
    },
    // Increment by a specific amount
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state.history.push({ action: `increment by ${action.payload}`, value: state.value, timestamp: new Date().toISOString() });
    },
    // Decrement by a specific amount
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
      state.history.push({ action: `decrement by ${action.payload}`, value: state.value, timestamp: new Date().toISOString() });
    },
    // Reset counter to 0
    reset: (state) => {
      state.value = 0;
      state.history.push({ action: 'reset', value: 0, timestamp: new Date().toISOString() });
    },
    // Clear history
    clearHistory: (state) => {
      state.history = [];
    }
  }
});

// Export actions
export const { increment, decrement, incrementByAmount, decrementByAmount, reset, clearHistory } = counterSlice.actions;

// Selectors to access state
export const selectCount = (state) => state.counter.value;
export const selectHistory = (state) => state.counter.history;

// Export reducer
export default counterSlice.reducer;
