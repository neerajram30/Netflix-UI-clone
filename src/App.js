
import React,{useContext,useEffect} from 'react'
import {
  BrowserRouter as Router,

  Route,
} from "react-router-dom";


import './App.css'
import FrontPage from './Pages/FrontPage';
import HomeScreen from './Components/HomeScreen/HomeScreen'
import SigninPage from './Pages/SigninPage';
import SignupPage from './Pages/SignupPage';
import { AuthContext, FirebaseContext } from './Context/Context';
function App() {
  const {firebase} = useContext(FirebaseContext)
  const {setUser} = useContext(AuthContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user);
    })
  })
  return (
<div className="App">
  <Router>
        
          <Route  exact path="/">
          <FrontPage/>
          </Route>
          <Route exact path='/home'>
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
