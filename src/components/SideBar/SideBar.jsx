import "./SideBar.css";
import wtwrAvatar from "../../images/wtwrAvatar.svg";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <p className="sidebar__username">Terrance Tegegne</p>
        <img
          src={wtwrAvatar}
          alt="Terrance Tegegne"
          className="sidebar__avatar"
        />
      </div>
    </aside>
  );
}
