import React from "react";
import profile from "../Assests/profile_img.png";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-box"></div>
      <div className="profile-img">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Profile;
