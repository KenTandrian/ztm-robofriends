import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./containers/App"; // this is default export, no need brackets
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// What does it mean?
// Hey ReactDOM (react comp which interacts with the DOM, render the first parameter in the div.root)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
