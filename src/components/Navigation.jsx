import React from "react";
import { Link } from "react-router-dom";
import { inView, motion } from "framer-motion";
const Navigation = () => {
  return (
    <div className=" navigation-container ">
      <div className="absolute   left-20 sm:left-1/2 top-14 navigation-wrapper uppercase ">
        <motion.div
          initial={{ x: 0, y: -350 }}
          animate={inView ? { x: 0, y: 20 } : { x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="navigation-tilt">
            <Link to={"/about"}>
              <div className="nav-btns ml-8">About</div>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, y: -350 }}
          animate={inView ? { x: 0, y: 20 } : { x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
        <div className="navigation-tilt-2">
          <Link to={"/project"}>
            <div className="nav-btns">Projects</div>
          </Link>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navigation;
