import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Login(props) {
  return (
    <div>
      <div
        className="bg-[url('https://browsecat.art/sites/default/files/netflix-background-128505-385441-537479.png')] 
    h-screen w-[87rem] ml-12 "
      >
        <div className="bg-gradient-to-t from-black via-transparent to-black h-screen">
          <div className="flex justify-between px-6 pt-4 bg-gradient-to-t from-black ">
            {/* <a className='text-5xl   font-black text-red-600'>NETFLIX</a>   */}
            <img className="w-40  " src="/images/img1.png" />
            <div className="space-x-2 font-bold">
              <button className="bg-transperant border px-2 py-1 text-white">
                <LanguageIcon /> English <ArrowDropDownIcon />
              </button>
              <button className="bg-red-600 px-4 py-2 rounded-sm">
                SignIn
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-40">
            <a className="text-white text-6xl font-black">
              {" "}
              Unlimited movies, TV <br />
              <a className="ml-12">shows and more.</a>
              <br />
              <a className="text-xl font-semibold ml-40">
                Watch anywhere, Cancel anytime.
              </a>
            </a>
          </div>
          <a className="mt-4 text-lg font-semibold flex justify-center text-white">
            Ready to watch? Enter your Email to create or Restart your
            membership.
          </a>
          <div className="mt-4">
            <input
              placeholder="Email address"
              className="pl-1 ml-[22rem] h-16 w-1/3 mt-"
            />
            <button
              onClick={props.getin}
              className="bg-red-600 px-8 py-4 text-2xl mt- text-white font-black"
            >
              Get Started <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
