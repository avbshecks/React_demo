import { Link } from "react-router-dom";
import "./MainNavigation.css";
import { FaFacebook, FaViber, FaRocketchat } from "react-icons/fa";
function MainNavigation() {
  return (
    <header className="header">
      <h4 className="header-title">React MeetUps</h4>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <Link to="/">
              {" "}
              <FaFacebook className="sidebar-menu-icon" />
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/new-meetups">
              {" "}
              <FaViber className="sidebar-menu-icon" />
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/favourites">
              {" "}
              <FaRocketchat className="sidebar-menu-icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
