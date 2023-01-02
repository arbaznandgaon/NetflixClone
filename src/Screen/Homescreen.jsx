import React from "react";
import Navbar from "../Components/Navbar";
import DisplayScreen from "../Components/DisplayScreen";
import Row from "../Components/Row";

function Homescreen() {
  return (
    <div className="bg-[url('https://wallpaperaccess.com/full/1223720.jpg')] bg-cover h-screen ">
      <Navbar className="" />
      <DisplayScreen className="" />
      <div className="px-6 bg-black">
        <Row title={"Netflix Orignals"} />
        <Row title={"Trending"} />
        <Row title={"Top Rated"} />
        <Row title={"Action"} />
        <Row title={"Romance"} />
        <Row title={"Comedy"} />
        <Row title={"Documentries"} />
        <Row title={"Horror"} />
        <Row title={"Sci-Fi"} />
      </div>
    </div>
  );
}

export default Homescreen;
