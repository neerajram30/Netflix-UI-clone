import axios from '../../axios'
import React,{useEffect,useState} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import {API_KEY, imgUrl} from '../../constants'
function RowPost(props) {
    
    const [movies,setMovies]= useState([])
    const [trailerUrl,setTrailerUrl] = useState("");
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results);
        }).catch(error=>{
            console.log("Error loading movie list")
        })
    }, [props.url])
    const opts={
        height : "390",
        width : "100%",
        playerVars: {
            autoplay:1,
        },
    };

    const handleClick= (id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(trailerUrl){
                setTrailerUrl("");
            }
            else if(response.data.results.length!==0){
                setTrailerUrl(response.data.results[0]);
            }
            else{
                console.log("Error while fetching");
            }

        })
    }

    return (
        <div className="row">
            <h1>{props.title}</h1>
            <div className="posters">
                {movies.map((movie)=>
                 
                        <img 
                        onClick={()=>handleClick(movie.id)}
                        className={props.isLargePoster ? "poster_large":"poster"}
                    src={`${imgUrl+movie.poster_path}`} 
                    alt={movie.name} />
                
                 )}
            </div>
                        {trailerUrl && <YouTube videoId={trailerUrl.key} opts={opts}/>}
        </div>
    );
}

export default RowPost
