import React from "react";
import "../blocks/ProfileSideBar.css";
import { UserInfoContext } from "../contexts/UserInfoContext";
import { Link } from "react-router-dom";
import EditIcon from "../images/edit.svg";

function SideBar({ handleSignOut, handleOpenEdit }) {
  const { currentUser } = React.useContext(UserInfoContext);
  return (
    <div className="side-bar">
      <div className="side-bar__info">
        <Link to="/">
          <img
            className="side-bar__avatar"
            alt="avatar"
            src={currentUser.avatar}
          ></img>
        </Link>
        <p className="side-bar__name">{currentUser.name}</p>
        <button className="side-bar__edit-button" onClick={handleOpenEdit}>
          edit
        </button>
      </div>
      <button className="side-bar__sign-out" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default SideBar;
