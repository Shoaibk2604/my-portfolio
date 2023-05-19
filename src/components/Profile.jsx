import React from "react";
import profile from "../Assests/profile_img.png";
const Profile = () => {
  return (
    <>
      <div className="profile-container">
      <div className="profile-title text-5xl uppercase">
        <div className="title-one">
          <h3>Frontend</h3>
        </div>
        <div className="title-two">
          <h3 >Developer</h3>
        </div>
      </div>
        <div className="profile-box"></div>
        <div className="profile-img">
          <img src={profile} alt="Profile picture" />
        </div>
      </div>
    </>
  );
};

export default Profile;
