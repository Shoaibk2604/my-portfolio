import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className=" navigation-container">
      <div className="absolute inset-y-0 right-12 navigation-wrapper uppercase ">
        <div className="nav-btns ">About</div>
        <Link to={"/project"}>
          <div className="nav-btns">Projects</div>
        </Link>
        <div className="nav-btns">contact</div>
      </div>
    </div>
  );
};

export default Navigation;
