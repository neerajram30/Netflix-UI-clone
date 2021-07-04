import React, { useContext } from 'react'
import "./NavBar.css"
import {useState,useEffect} from 'react'
import {AuthContext,FirebaseContext} from '../../Context/Context'
import {useHistory} from 'react-router-dom'
function NavBar() {
    const [show,handleShow]=useState(false);
    const {user} = useContext(AuthContext)
    const {firebase}=useContext(FirebaseContext);
    const history =useHistory();
    const transitionNavBar =()=>{
    if(window.scrollY>100){
        handleShow(true);
    }
    else{
        handleShow(false);
    }
}
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return ()=> window.removeEventListener("scroll",transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            <div className="user">
            <ul>
                { <li><span>{user && <span onClick={()=>{firebase.auth().signOut();
                    history.push('/signin');
               } }>Logout </span> }</span></li> }

                </ul>

            </div>
            
            <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"  
            alt="" className="avatar" />
            {/* <div class="dropdown">

    <button class="dropbtn">
      <i class="fa fa-caret-down"></i>

    </button>
    <div class="dropdown-content">
            <p>Logout</p>
    </div>
  </div> */}
        </div>
  
    )
}

export default NavBar
