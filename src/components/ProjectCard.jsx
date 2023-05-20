import React from "react";
import { AiFillGithub } from "react-icons/ai";
import project1 from "../Assests/taskmanagement.png";


const ProjectCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 place-content-around my-8 place-items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:frid-cols-1 lg:grid-cols-1  p-4 glass-drop place-content-center gap-2 ">
          <div>
            <img src={project1} alt="Thumbnail" width="600px" />
          </div>
          <div className="text-indigo-100">
            <h4 className="text-2xl tracking-wide text-yellow-300">
              Task Managment Web App
            </h4>
            <p className="text-sm tracking-wider font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              magni rem quos commodi aperiam quas at eaque, quasi accusantium
              quaerat.
            </p>
            <div className="grid grid-cols-2 mt-2">
              <button className="text-3xl w-1/12 text-gray-800">
                <AiFillGithub />
              </button>
              <button className="btn-primary">Visit Project</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
