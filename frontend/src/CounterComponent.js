// CounterComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction } from './ActionCreators';
import "./CounterComponent.css";

const CounterComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(incrementAction(5))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
