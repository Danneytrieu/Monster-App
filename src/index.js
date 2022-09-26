import React from 'react'; // React engine
import ReactDOM from 'react-dom/client'; //engine direct toward web
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Strictmode prevent developer to write old react codes
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
