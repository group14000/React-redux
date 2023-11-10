// ReduxProvider.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './ReduxSetup';

const ReduxProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ReduxProvider;
