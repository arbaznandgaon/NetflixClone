import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';


function Login({Cred,SCred,handle}) {

const [signup,setSignUp]= useState(null)

function handleChange(e){
const {name,value}=e.target;
SCred(prev =>({...prev,[name] : value}))
}


  return (
    <div className="bg-black">
      <div
        className="bg-[url('https://browsecat.art/sites/default/files/netflix-background-128505-385441-537479.png')] 
    h-screen w-[87rem] ml-12 "
      >
        <div className="bg-gradient-to-t from-black via-transparent to-black h-screen">
          <div className="flex justify-between px-6 pt-4 bg-gradient-to-t from-black ">
           
            <img className="w-40  " src="/images/img1.png" />
            <div className="space-x-2 font-bold">
              <button  className="bg-transperant border px-2 py-1 text-white">
                <LanguageIcon /> English <ArrowDropDownIcon />
              </button>
              
            </div>
          </div>
          <div className='bg-black/80 h-auto mt-10 w-[28rem] mx-auto px-12 py-12 space-y-8 rounded-lg'>
         <p className='text-white font-bold text-2xl'>{signup ? "Sign Up" : "Sign In"}</p>
         <input onChange={handleChange} name="email" value={Cred.email} type='email' placeholder='Email or Phone Number' className='text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]'/>
         <input onChange={handleChange} name="pass" value={Cred.pass} type='password' placeholder='Password' className='text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]'/>
          <div className='flex flex-col space-y-2 text-gray-600'>
            <button onClick={()=>{signup ? handle.createUser() : handle.loginUser()}} className='text-white bg-red-600 px-4 py-3 rounded-md w-[22rem] font-bold'>Sign In</button>
            <div className='flex justify-between text-xs text-slate-300'>
                <p><CheckBoxTwoToneIcon/> Remember Me </p>
                <p>Need Help</p>
            </div>
            </div>
             
             <div className='text-slate-500 space-y-2 pt-4 font-semibold'>
                <p>{signup ? "Already have an account ? " : "New to Netflix ? "} <button onClick={()=>setSignUp(!signup)} className="text-white hover:underline cursor-pointer">{signup ? "Sign In" : "Sign Up"}</button></p>
                <p>This page is protected by Google <br/>reCaptche to ensure you are not a bot.<br/><span className='text-blue-800'>Learn More</span></p>
             </div>
       </div>
         
           
          </div>
        </div>
      </div>
  
  );
}

export default Login;
