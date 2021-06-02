
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css'
import HomeScreen from './HomeScreen'
function App() {
  return (
<div className="App">
  <Router>
        <Switch>
          <Route path="/">
          <HomeScreen/>
          </Route>
        </Switch>
    </Router>
</div>
  );
}

export default App;
