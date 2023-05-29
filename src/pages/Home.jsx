import React from "react";
import AccountLinks from "../components/AccountLinks";
import BackgroundDesign from "../components/BackgroundDesign";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import Transition from "../components/Transition";

const Home = () => {
  return (
    <div>
      <Transition />
      <BackgroundDesign/>
      <Profile />
      <Navigation />
      <AccountLinks />
    </div>
  );
};

export default Home;
