import "./NavBar.scss";

function NavBar(props) {
  return (
    <nav className={"nav " + (props.sidebarOpen && "active")}>
      <div className="wrapper">
        <div className="nav-left">
          <a className="logo" href="#intro">
            &#60;ns&#62;
          </a>
          <div className="contact-info"></div>
        </div>
        <div className="nav-right">
          <div className="links">
            <a href="#intro">Home</a>
            <a href="about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <i className="uil uil-moon"></i>
          </div>
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
