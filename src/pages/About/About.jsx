import React from "react";
import AboutHeading from "../../components/AboutHeading";
import Transition from "../../components/Transition";
import profile from "../../Assests/aboutprofile.png";
import Biography from "../../components/Biography";
import Skill from "../../components/Skill";
const About = () => {
  return (
    <>
      <Transition />
      <div className="about-container mt-5 mx-1 md:mx-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   ">
          <AboutHeading />
          <div className="about-profile grid place-items-center sm:place-items-start">
            <img
              src={profile}
              alt="profile"
              width="200px"
              className="drop-shadow-2xl"
            />
          </div>
          <Biography />
        </div>
        <Skill/>
      </div>
    </>
  );
};

export default About;
