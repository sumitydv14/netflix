import axios from 'axios';
import React, { useEffect, useState } from 'react'
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
function Romantics() {

    const [Romantics , setRomantics]= useState([]);
    const [trailerUrl , setTrailerUrl] = useState("");
    const baseURL='https://image.tmdb.org/t/p/original';

    useEffect(() =>{
         async function fetchData(){
             const request = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0a867a504fd7ec2d55b75a2537ee9bb6&language=en-US&page=1&include_adult=true&include_video=true');
             console.log('vidoe tirals' , request.data.results);
             setRomantics(request.data.results);
         }

         fetchData();

    },[])
    
    const opts = {
      height:'390',
      width:'100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }

    const handleClick = (poster) =>{
      console.log("videourl", poster);
   if(trailerUrl){
     setTrailerUrl('');
   }else {
     movieTrailer(poster?.name || "")
     .then((url) =>{
       //https://www.youtube.com/watch?v=XtMThy80QKqU
       const urlParams = new URLSearchParams(new URL(url).search);
       console.log("url",  urlParams);
       setTrailerUrl(urlParams.get("v"));
     }).catch((error) => console.log(error));
   }
 };


console.log("!!!!", movieTrailer)
    return (
    
              <section className="movie-poster-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="netflix-originals-poster">
              <h4 className="text-white mb-5">Popular Movies</h4>
            
                  <div className="item-wrap">
                 {
                     Romantics.map(poster =>{
                       
                        return(
                            <div className="item" key={poster.id} onClick={() => handleClick(poster)}>
                            <div className="poster-img">
                                 <img src={`https://image.tmdb.org/t/p/original/${poster.poster_path}`} alt={poster.name} className="img-fluid"/>
                            </div> 
                         </div>
                        )}
                        )
                 } 
                </div>
             
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

             
              
            </div>
          </div>
        </div>
      </div>
    </section>
    
    )
}

export default Romantics
