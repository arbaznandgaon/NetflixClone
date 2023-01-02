
const APIKey ="30cb7a1b9a94ce47f4e0053e7c86a250";

const requests ={
    fetchTrending:`/trending/all/week?api_key=${APIKey}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKey}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKey}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKey}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKey}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKey}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${APIKey}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKey}&with_genres=99`

};

export default requests;