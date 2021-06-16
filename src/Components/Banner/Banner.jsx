import React from 'react'
import './Banner.css'
import {useState,useEffect} from 'react'
import axios from '../../axios'
import {API_KEY} from '../../constants'
import {imgUrl} from '../../constants'
function Banner() {
    const [movie,setMovie] = useState([])
    
   useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((respose)=>{
            console.log(respose.data.results[0])
          setMovie(respose.data.results[Math.floor(Math.random() * respose.data.results.length-1)])  
        })
   }, []);

   console.log(movie);
    function truncate(string, n){
        return string?.length> n ? string.substring(0 ,n-1) +'...' : string;
    }


    return (
        <div className="Banner" 
        style={{
            backgroundImage :`url(${movie ? imgUrl+movie.backdrop_path : ""})`,
            
        }}
        >
            <div className="content">
                <h1 className="Title">{movie?.title || movie?.name || movie?.orginal_name}</h1>
                <div className="banner_buttons">
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>

                </div>
                <h1 className="description">{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
 