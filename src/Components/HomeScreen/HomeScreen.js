import React,{useContext} from 'react'
import './HomeScreen.css'
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import RowPost from '../RowPosts/RowPost'
import {orginals,action, trending, toprated,comedy,romance,documentaries,horror} from '../../urls'
import { AuthContext } from '../../Context/Context'


function HomeScreen() {

    const {user}=useContext(AuthContext);
    
    return (
        
       <div>
            { user && <div>


            <NavBar/>
            <Banner/>
            <RowPost title="NETFLIX ORIGINALS"  isLargePoster url={orginals}/>
            <RowPost title="Trending Now" url={trending} />
            <RowPost title="Top Rated" url={toprated}/>  
            <RowPost title="Action Movies" url={action} />
            <RowPost title="Comedy Movies" url={comedy}/>
            <RowPost title="Horror Movies" url={horror}/>
            <RowPost title="Romance Movies" url={romance}/>
            <RowPost title="Doccumentaries" url={documentaries}/> 
            
            </div>
            }
            
            </div>
        )
}

export default HomeScreen
