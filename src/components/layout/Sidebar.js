import "./Sidebar.css";
import {
  FaHome,
  FaAlignJustify,
  FaViruses,
  FaBookReader,
} from "react-icons/fa";
import {} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./cbz2.png";
function Sidebar() {
  return (
    <div className="sidebar">
      {/* <h4 className="sidebar-title">React App</h4> */}
      <div>
        <img className="sidebar-logo" src={logo} alt="Logo" />
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <FaHome className="sidebar-menu-icon" />
          <Link className="sidebar-menu-item" to="/home">
            Home
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <FaAlignJustify className="sidebar-menu-icon" />
          <Link className="sidebar-menu-item" to="/props">
            About
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <FaViruses className="sidebar-menu-icon" />
          <Link className="sidebar-menu-item" to="/home">
            Services
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <FaBookReader className="sidebar-menu-icon" />
          <Link className="sidebar-menu-item" to="/contact">
            Contact
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <FaBookReader className="sidebar-menu-icon" />
          <Link className="sidebar-menu-item" to="/profileCard">
            Profile Card
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <FaBookReader className="sidebar-menu-icon" />
          <Link className="sidebar-menu-item" to="/animals">
            Animals
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <FaBookReader className="sidebar-menu-icon" />
          <Link className="sidebar-menu-item" to="/search">
            Search App
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
