import React from 'react'
import DeshboardBanner from './DeshboardBanner'
import DeshboardNavbar from './DeshboardNavbar'
import MoviesPoster from './MoviesPoster'
import Romantics from './Romantics'
import TrandingMovies from './TrandingMovies'

function Deshboard() {
    return (
        <div>
            
            <DeshboardNavbar/>
            <DeshboardBanner/>
            <MoviesPoster/>
            <TrandingMovies/>
            <Romantics/>
        </div>

    )
}

export default Deshboard
