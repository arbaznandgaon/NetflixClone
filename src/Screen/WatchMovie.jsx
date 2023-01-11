import React, { useEffect,useState } from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router'
import axios from '../axios';

function WatchMovie() {

    const authcheck= "thisismyuniquekey";
    const {movie_id, auth}= useParams()
    const [video,setVideo] = useState(true)

    useEffect(()=>{
      async function getMovie(){
        await axios.get(`/movie/${movie_id}/videos?api_key=30cb7a1b9a94ce47f4e0053e7c86a250&language=en-US`)
        .then((res)=>{
          setVideo( res.data.result)
        })
        .catch((error)=>{
          setVideo(null)
        })
      }
      getMovie()

    },[movie_id,auth])
    
  if (authcheck !== auth) return <h1>Bad Request</h1>
  console.log(video)

  return (
    <div className='bg-black h-screen'>
        <Navbar/>
        {
          video ? <div className='max-w-[100rem] mx-auto'>
            <video width="800" height="600" controls>
  <source src={`https://www.youtube.com/watch?v=${video[0]?.key}`} type="video/mp4"/>
   Your browser does not support the video tag.
</video>
          </div> : <h1 className='text-white font-semibold text-center'>No videos found</h1>
        }
    </div>
  )
}

export default WatchMovie