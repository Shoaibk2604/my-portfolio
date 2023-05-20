import React from "react";
import Transition from "../../components/Transition";

const Project = () => {
  return (
    <>
      <Transition />
      <div className="project-container mx-8">
        <div className="project-page-heading ">
          <h2 className="uppercase text-6xl grid place-content-center mt-12 text-indigo-200">
            Personal projects
          </h2>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12 place-content-around my-8 place-items-center">
<div className="border-2  h-60">01</div>
<div className="border-2  h-60">02</div>
<div className="border-2  h-60">03</div>
<div className="border-2  h-60">04</div>
        </div>
      </div>
    </>
  );
};

export default Project;
