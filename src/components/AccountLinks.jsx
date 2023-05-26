import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const AccountLinks = () => {
  return (
    <div className="relative">
      <div className="flex flex-col position-social-icon">
        <div className="text-3xl text-white hover:text-blue-800 hover:bg-white rounded-full cursor-pointer my-2">
          <Link to={"https://www.linkedin.com/in/shoaib-khan-174200235"} target="_blank">
            {" "}
            <AiFillLinkedin />
          </Link>{" "}
        </div>
        <div className="text-3xl text-white hover:text-red-500 hover:bg-white rounded-full cursor-pointer my-2">
          <Link to={"https://www.instagram.com/i.shoaib_khan"} target="_blank">
            {" "}
            <AiOutlineInstagram />
          </Link>{" "}
        </div>
        <div className="text-3xl text-white hover:text-blue-500 hover:bg-white rounded-full cursor-pointer my-2">
          <Link to={""} target="_blank">
            {" "}
            <AiFillTwitterCircle />
          </Link>{" "}
        </div>
        <div className="text-3xl text-white hover:text-indigo-900 hover:bg-white rounded-full cursor-pointer my-2">
          <Link to={"https://github.com/Shoaibk2604"} target="_blank">
            <AiFillGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountLinks;
