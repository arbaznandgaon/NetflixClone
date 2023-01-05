import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import DisplayScreen from "../Components/DisplayScreen";
import Row from "../Components/Row";
import axios from "axios";
import requests from "../Requests";




function Homescreen() {

useEffect(()=>{axios.get('https://api.themoviedb.org/3/movie/550?api_key=50417cbf82069a9900e39a19c39bcb23')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
},[])



  return (
    <div >
      <Navbar className="" />
      <DisplayScreen className="" />
      <div className="px-6 bg-black">
        <Row title={"Netflix Orignals"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
        <Row title={"Trending"} fetchUrl={requests.fetchTrending}/>
        <Row title={"Top Rated"} fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title={"Action"} fetchUrl={requests.fetchActionMovies}/>
        <Row title={"Romance"} fetchUrl={requests.fetchRomanceMovies}/>
        <Row title={"Comedy"} fetchUrl={requests.fetchComedyMovies}/>
        <Row title={"Documentries"} fetchUrl={requests.fetchDocumentaries}/>
        <Row title={"Horror"} fetchUrl={requests.fetchHorrorMovies}/>
        {/* <Row title={"Sci-Fi"} /> */}
      </div>
    </div>
  );
}

export default Homescreen;
