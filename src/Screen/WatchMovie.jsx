import React from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router'

function WatchMovie() {

    const x= useParams()
    console.log(x)
  return (
    <div className='bg-black h-screen'>
        <Navbar/>
    </div>
  )
}

export default WatchMovie