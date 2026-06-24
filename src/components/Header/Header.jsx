import "./Header.css";
import wtwrlogo from "../../images/wtwrLogo.svg";
import wtwravatar from "../../images/wtwrAvatar.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={wtwrlogo}></img>
      <p className="header__date-and-place">DATE, Place</p>
      <button className="header__add-clothes-btn">+ADD Clothes</button>
      <div className="header__user-container">
        <p className="header__username">Terrance Tegegne</p>
        <img
          src={wtwravatar}
          alt="Terrance Tegegne"
          className="header__avatar"
        />
      </div>
    </header>
  );
}

export default Header;
