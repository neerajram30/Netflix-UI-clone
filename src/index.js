import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './Context/Context'
import firebase from './FirebaseConfig'
ReactDOM.render(
  <FirebaseContext.Provider value={{firebase}}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

