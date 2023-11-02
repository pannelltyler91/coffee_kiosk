import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import icedReducer from './features/icedCoffee';
import hotReducer from './features/hotCoffee'
import cartReducer from './features/cart';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer:{
    icedcoffee:icedReducer,
    hotcoffee:hotReducer,
    cart:cartReducer,
  },
})
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
