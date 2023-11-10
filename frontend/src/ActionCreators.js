// ActionCreators.js
import { INCREMENT, DECREMENT, INCREMENT_BY_2, DECREMENT_BY_2 } from './ActionTypes';

export const incrementAction = (value) => ({
  type: INCREMENT,
  payload: value,
});

export const decrementAction = () => ({
  type: DECREMENT,
});

export const incrementBy2Action = () => ({
  type: INCREMENT_BY_2,
});

export const decrementBy2Action = () => ({
  type: DECREMENT_BY_2,
});
