import { NavLink } from "react-router-dom";

import "./Header.css";
import wtwrLogo from "../../images/wtwrLogo.svg";
import wtwrAvatar from "../../images/wtwrAvatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink className="header__nav-link-home" to="/">
        <img className="header__logo" alt="WTWR logo" src={wtwrLogo} />
      </NavLink>
      <p className="header__date-and-place">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        +ADD Clothes
      </button>
      <NavLink className="header__nav-link" to="/profile">
        <div className="header__user-container">
          <p className="header__username">Terrance Tegegne</p>
          <img
            src={wtwrAvatar}
            alt="Terrance Tegegne"
            className="header__avatar"
          />
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
