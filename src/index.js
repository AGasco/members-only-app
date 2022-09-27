import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCyqN5BLaeTysxcNjPfwMeKM7uUmAxCV-Q',
  authDomain: 'mern-members-only.firebaseapp.com',
  projectId: 'mern-members-only',
  storageBucket: 'mern-members-only.appspot.com',
  messagingSenderId: '963810733708',
  appId: '1:963810733708:web:8d9aaecc2d035a746b15a9',
  measurementId: 'G-ZZMGQWL2R5'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
