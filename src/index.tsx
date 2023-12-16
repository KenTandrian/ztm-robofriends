import { combineReducers, configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import App from "./containers/App"; // this is default export, no need brackets
import { requestRobots, searchRobots } from './reducers';
import reportWebVitals from './reportWebVitals';

import 'tachyons';
import './index.css';

const logger = createLogger(); // Middleware
const rootReducers = combineReducers({ requestRobots, searchRobots });

const store = configureStore({
  reducer: rootReducers,
  // @ts-ignore
  middleware: (gDM) => gDM().concat(logger),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
// What does it mean?
// Hey ReactDOM (react comp which interacts with the DOM, render the first parameter in the div.root)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
