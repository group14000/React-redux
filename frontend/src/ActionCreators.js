// ActionCreators.js
import { INCREMENT, DECREMENT } from './ActionTypes';

export const incrementAction = (value) => ({
  type: INCREMENT,
  payload: value,
});

export const decrementAction = () => ({
  type: DECREMENT,
});
