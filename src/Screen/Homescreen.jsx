import React from 'react'
import Navbar from '../Components/Navbar'
import DisplayScreen from '../Components/DisplayScreen'

function Homescreen() {
  return (
    <div className="bg-[url('https://wallpaperaccess.com/full/1223720.jpg')] bg-cover">
        <Navbar/>
        <DisplayScreen />
    </div>
  )
}

export default Homescreen