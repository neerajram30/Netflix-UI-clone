import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './Context/Context'
import firebase from './FirebaseConfig'
import Context from './Context/Context'
ReactDOM.render(
  <FirebaseContext.Provider value={{firebase}}>
    <Context>
    <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

