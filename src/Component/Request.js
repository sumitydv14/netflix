const API_KEY="0a867a504fd7ec2d55b75a2537ee9bb6";

const userrequests={
    fetchTranding : `all/week?api_Key=${API_KEY}&languages=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopReted :`/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
    fetchActionMovies :`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies :`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies :`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries :`/discover/movie?api_key=${API_KEY}&with_genres=99`
}


export default userrequests;