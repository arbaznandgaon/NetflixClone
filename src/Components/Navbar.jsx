import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
  return (
    <div className='flex justify-between h-20 bg-black  bg-transparent- px-16 py-3'>
        <a className='text-red-600 text-5xl font-bold'>NETFLIX</a>
        {/* <img className='w-  ' src="img1.png"/> */}
        <div className='text-gray-300 text-xl space-x-4 mt-3 mr-[20rem]'>
        <a>Home</a>
        <a>TV Shows</a>
        <a>Movies</a>
        <a>Recently Added</a>
        <a>My List</a>
       
        </div>
      <div className='flex space-x-4'>
      <div className='text-gray-300 text-xl flex mt-4 space-x-4'>
        <SearchIcon/>
        <a>KIDS</a>
        <a>DVD</a>
        <NotificationsNoneIcon/>
        </div>
        <div className='flex mr-2 mt-2'>
        <img className='w-10 h-10' src='https://i.pinimg.com/736x/44/78/1b/44781ba4ac0c63f2ecf0793a533bf8dc.jpg'/>
        <ArrowDropDownIcon className='text-white'/>
        </div>
      </div>
       
    


    </div>
  )
}

export default Navbar