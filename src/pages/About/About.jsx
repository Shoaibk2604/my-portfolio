import React from "react";
import AboutHeading from "../../components/AboutHeading";
import Transition from "../../components/Transition";
import profile from "../../Assests/aboutprofile.png";
import Biography from "../../components/Biography";
import Skill from "../../components/Skill";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <Transition />
      <div className="about-container mt-5 mx-3 md:mx-12">
        <div className="absolute top-5 sm:top-16  sm:right-16 text-4xl text-indigo-200">
          <Link to="/">
            <BiArrowBack />
          </Link>
        </div>
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
        <Skill />
      </div>
    </>
  );
};

export default About;
