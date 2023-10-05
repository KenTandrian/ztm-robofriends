import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from "./containers/App"; // this is default export, no need brackets
import reportWebVitals from './reportWebVitals';
import { searchRobots, requestRobots } from './reducers';

import './index.css';
import 'tachyons';

const logger = createLogger(); // Middleware
const rootReducers = combineReducers({ requestRobots, searchRobots });
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger)); // supposed to be rootReducer

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
);
// What does it mean?
// Hey ReactDOM (react comp which interacts with the DOM, render the first parameter in the div.root)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
