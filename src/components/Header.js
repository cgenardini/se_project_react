import React from "react";
import "../blocks/Header.css";
import ToggleSwitch from "./ToggleSwitch";
import { UserInfoContext } from "../contexts/UserInfoContext";
import { Link } from "react-router-dom";

function Header({ logoSrc, currentCity, currentDate, onClick }) {
  const { userInfo } = React.useContext(UserInfoContext);

  return (
    <header className="header">
      <img alt="image" src={logoSrc} className="header__logo"></img>
      <h1 className="header__date">
        {currentDate}, {currentCity}
      </h1>
      <ToggleSwitch />
      <button type="button" className="header__button" onClick={onClick}>
        + Add clothes
      </button>
      <Link to="/profile" className="header__name">
        {userInfo.name}
      </Link>
      <Link to="/">
        <img
          className="header__avatar"
          alt="avatar"
          src={userInfo.avatar}
        ></img>
      </Link>
    </header>
  );
}

export default Header;
