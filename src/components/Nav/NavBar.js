import "./NavBar.scss";

function NavBar(props) {
  return (
    <nav className={"nav " + (props.sidebarOpen && "active")}>
      <div className="nav-wrapper">
        <div className="nav-left">
          <a href="#intro">
            <img
              className="nav-logo"
              src="images/default-monochrome2.svg"
              alt="logo"
            ></img>
          </a>
        </div>
        <div className="nav-right">
          <div
            className="nav-right-hamburger"
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
