import React from 'react'
import Navbar from '../Components/Navbar'
import DisplayScreen from '../Components/DisplayScreen'
import Row from '../Components/Row'

function Homescreen() {
  return (
    <div >
        <Navbar className=""/>
        <DisplayScreen className=""/>
        <div>
        <Row title={"Netflix Orignals"}  />
        <Row title={"Trending"}  />
        <Row title={"Top Rated"}  />
        <Row title={"Action"}  />
        <Row title={"Romance"}  />
        <Row title={"Comedy"}  />
        <Row title={"Documentries"}  />
        <Row title={"Horror"}  />
        <Row title={"Sci-Fi"}  />
        </div>
     
    {/* className="bg-[url('https://wallpaperaccess.com/full/1223720.jpg')] bg-cover h-screen " */}


    </div>
  )
}

export default Homescreen