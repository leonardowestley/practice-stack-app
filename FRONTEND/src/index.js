import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyB7hdUzqbC0jDoRP5VPVm4DA5osZUHF7Ck",
  authDomain: "practice-stack-app.firebaseapp.com",
  projectId: "practice-stack-app",
  storageBucket: "practice-stack-app.appspot.com",
  messagingSenderId: "792013258002",
  appId: "1:792013258002:web:93ef33eb92c4438f8187cb"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

