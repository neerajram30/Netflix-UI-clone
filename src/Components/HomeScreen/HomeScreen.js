import React from 'react'
import './HomeScreen.css'
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import RowPost from '../RowPosts/RowPost'
import {orginals,action, trending, toprated} from '../../urls'

function HomeScreen() {
    return (
        <div>
            <NavBar/>
<Banner/>
<RowPost title="NETFLIX ORIGINALS"  isLargePoster url={orginals}/>
 <RowPost title="Trending Now" url={trending} />
 <RowPost title="Top Rated" url={toprated}/>  
<RowPost title="Action Movies" url={action} />
 {/* <RowPost title="Comedy Movies" url={comedy}/>
<RowPost title="Horror Movies" url={horror}/>
<RowPost title="Romance Movies" url={romance}/>
<RowPost title="Doccumentaries" url={documentaries}/>  */}
        </div>
    )
}

export default HomeScreen
