import React from "react";
import Transition from "../../components/Transition";
import ProjectCard from "../../components/ProjectCard";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <>
      <Transition />
      <div className="project-container mx-8">
        <div className="project-page-heading ">
          <h2 className="uppercase text-6xl grid place-content-center mt-12 text-indigo-200">
            Personal projects
          </h2>
          <div className="absolute top-16 text-4xl text-indigo-200">
            <Link to="/">
              <BiArrowBack />
            </Link>
          </div>
        </div>
        <ProjectCard />
      </div>
    </>
  );
};

export default Project;
