import React from "react";
import "../blocks/Header.css";
import ToggleSwitch from "./ToggleSwitch";
import { UserInfoContext } from "../contexts/UserInfoContext";
import { Link } from "react-router-dom";

function Header({
  logoSrc,
  currentCity,
  currentDate,
  onClickAdd,
  onClickLogIn,
  onClickSignUp,
}) {
  const { currentUser, isLoggedIn } = React.useContext(UserInfoContext);

  const userInitial = currentUser.name ? currentUser.name.slice(0, 1) : "NA";

  return (
    <header className="header">
      <img alt="image" src={logoSrc} className="header__logo"></img>
      <h1 className="header__date">
        {currentDate}, {currentCity}
      </h1>
      <ToggleSwitch />
      {isLoggedIn ? (
        <>
          <button type="button" className="header__button" onClick={onClickAdd}>
            + Add clothes
          </button>
          <Link to="/profile" className="header__name">
            {currentUser.name}
          </Link>

          <Link to="/">
            {currentUser.avatar ? (
              <img
                className="header__avatar"
                alt="avatar"
                src={currentUser.avatar}
              ></img>
            ) : (
              <div className="header__avatar-default">
                <p className="header__avatar-inital">{userInitial}</p>
              </div>
            )}
          </Link>
        </>
      ) : (
        <>
          <button
            type="button"
            className="header__button"
            onClick={onClickSignUp}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="header__button"
            onClick={onClickLogIn}
          >
            Log In
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
