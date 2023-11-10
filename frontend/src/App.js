// App.js
import React from 'react';
import ReduxProvider from './ReduxProvider';
import CounterComponent from './CounterComponent';

const App = () => (
  <ReduxProvider>
    <CounterComponent />
  </ReduxProvider>
);

export default App;
