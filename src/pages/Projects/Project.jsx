import React from "react";
import Transition from "../../components/Transition";
import ProjectCard from "../../components/ProjectCard";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { projectData } from "../../api/api";
const Project = () => {
  return (
    <>
      <Transition />
      <div className="project-container mx-8">
        <div className="project-page-heading ">
          <h2 className="uppercase text-4 xl sm:text-6xl grid place-content-center mt-12 text-indigo-200">
            Personal projects
          </h2>
          <div className="absolute top-2 sm:top-16 text-4xl text-indigo-200">
            <Link to="/">
              <BiArrowBack />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 place-content-around my-8 place-items-center">
          {projectData.map((data) => {
            return (
              <ProjectCard
                title={data.title}
                img={data.picture}
                detail={data.detail}
                gitlink={data.gitlink}
                livelink={data.livelink}
                key={data.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
