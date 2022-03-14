import axios from '../LocalAxios';
import React, { useEffect, useState } from 'react'
import userrequests from '../Request';


function DeshboardBanner() {

    const [movie , setMovie]= useState([]);

    

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(userrequests.fetchNetflixOriginals);
             console.log(request.data.results[Math.floor(Math.random()* request.data.results.length)]);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
            
        } 

        fetchData();
    },[]);


    return (
        <section className="banner-bg"  style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')` , backgroundSize:'cover'  , zIndex:'9999' }}>
            <div className="container">
                 <div className="row">
                      <div className="col-md-12">
                         <div className="banner-content">
                             <div className="movie-name">
                                  <h1>{movie.name}</h1>
                             </div>
                             <div className="play-btn mt-4 ">
                                  <button>Play</button>
                                  <button>My List</button>
                             </div>
                             <div className="movie-discription">
                                 <p className="w-50 mt-4" >{movie.overview}</p>
                             </div>
                         </div>  
                         
                      </div>
                 </div>
            </div>
        </section>
    )
}

export default DeshboardBanner
