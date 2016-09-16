import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAK6GZq9pA1qVKQP5iV9RlmwhJoBbyMspI",
    authDomain: "fir-react-starter-e0b2d.firebaseapp.com",
    databaseURL: "https://fir-react-starter-e0b2d.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "243695225105"
  };

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
