import React from "react";
import Data from "../components/body/DataDisplay"

const Home = () => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/assets/home.jpg`} alt="a hiker" width="1920" height="1280"  />
      {/*A test to see if the Django backend is returning a request from React*/}
      <Data/>
    </div>
  );
};

export default Home;
