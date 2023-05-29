import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  const { detail, title, img, livelink, gitlink } = props;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:frid-cols-1 lg:grid-cols-1  p-4 glass-drop place-content-center gap-2 ">
        <div>
          <img src={img} alt="Thumbnail" width="600px" />
        </div>
        <div className="text-indigo-100">
          <h4 className="text-2xl tracking-wide text-yellow-300">{title}</h4>
          <p className="text-sm tracking-wider font-thin truncate">{detail}</p>
          <div className="grid grid-cols-2 mt-2">
            <Link to={gitlink}>
              <button className="text-3xl w-1/12 text-gray-800">
                <AiFillGithub />
              </button>
            </Link>
            <button className="btn-primary">
              <Link to={livelink}>Visit Project</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
