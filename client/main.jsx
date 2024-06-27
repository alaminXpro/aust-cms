import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/App.jsx';
import '/src/styles/globals.css';
//import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
