import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className=" navigation-container ">
      <div className="absolute   left-20 sm:left-1/2 top-14 navigation-wrapper uppercase ">
        <div className="navigation-tilt">
          <Link to={"/about"}>
            <div className="nav-btns ml-8">About</div>
          </Link>
        </div>
        <div className="navigation-tilt-2">
          <Link to={"/project"}>
            <div className="nav-btns">Projects</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
