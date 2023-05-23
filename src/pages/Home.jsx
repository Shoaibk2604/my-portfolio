import React from "react";
import AccountLinks from "../components/AccountLinks";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import Transition from "../components/Transition";

const Home = () => {
  return (
    <div>
      <Transition />
      <Profile />
      <Navigation />
      <AccountLinks />
    </div>
  );
};

export default Home;
