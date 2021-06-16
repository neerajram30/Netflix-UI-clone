
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css'
import FrontPage from './Pages/FrontPage';
import NavBar from './Components/NavBar/NavBar';
import HomeScreen from './Components/HomeScreen/HomeScreen'
function App() {
  return (
<div className="App">
  <Router>
        
          <Route exact path="/">
          <HomeScreen/>
          </Route>
        
        
          <Route path='/home'>
  
            <FrontPage/>
          
          </Route>
        
    </Router>
</div>
  );
}

export default App;
