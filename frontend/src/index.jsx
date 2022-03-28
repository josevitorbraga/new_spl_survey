import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContextProvider from './context/Context';
import App from './App';

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById('root')
);
