// CounterComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction, incrementBy2Action, decrementBy2Action } from './ActionCreators';
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
      <button onClick={() => dispatch(incrementBy2Action())}>
        Increment by 2
      </button>
      <button onClick={() => dispatch(decrementBy2Action())}>
        Decrement by 2
      </button>
    </div>
  );
};

export default CounterComponent;
