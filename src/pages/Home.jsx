import React from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import Transition from "../components/Transition";

const Home = () => {
  return (
    <div className="container">
      <Transition />
      <Profile />
      <Navigation />
    </div>
  );
};

export default Home;
