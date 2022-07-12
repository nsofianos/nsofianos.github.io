import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar(props) {
  return (
    <nav className={"nav " + (props.sidebarOpen && "active")}>
      <div className="wrapper">
        <div className="nav-left">
          <a href="#intro">
            <img
              className="logo"
              src="images/default-monochrome2.svg"
              alt="logo"
            ></img>
          </a>
          <div className="contact-info">
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </div>
        </div>
        <div className="nav-right">
          <div
            className="hamburger"
            onClick={() => props.setSidebarOpen(!props.sidebarOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
