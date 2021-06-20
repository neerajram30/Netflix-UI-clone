
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css'
import FrontPage from './Pages/FrontPage';
import HomeScreen from './Components/HomeScreen/HomeScreen'
import SigninPage from './Pages/SigninPage';
import SignupPage from './Pages/SignupPage';
function App() {
  return (
<div className="App">
  <Router>
        
          <Route exact path="/">
          <FrontPage/>
          </Route>
          <Route path='/home'>
          <HomeScreen/>
          </Route>
          <Route path='/signin'>
          <SigninPage/>
          </Route>
          <Route path='/signup'>
          <SignupPage/>
          </Route>

        
    </Router>
</div>
  );
}

export default App;
