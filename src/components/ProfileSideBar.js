import React from "react";
import "../blocks/ProfileSideBar.css";
import { UserInfoContext } from "../contexts/UserInfoContext";
import { Link } from "react-router-dom";

function ProfileSideBar() {
  const { userInfo } = React.useContext(UserInfoContext);
  return (
    <div className="side-bar">
      <Link to="/">
        <img
          className="side-bar__avatar"
          alt="avatar"
          src={userInfo.avatar}
        ></img>
      </Link>
      <p className="side-bar__name">{userInfo.name}</p>
    </div>
  );
}

export default ProfileSideBar;
