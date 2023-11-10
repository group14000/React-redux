// ReduxSetup.js
import { createStore } from 'redux';

// Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Reducer function
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(counterReducer);

export default store;
