import logo from "../img/devjane.png";

function Header() {
  return (
    <header className="App-header">
      <div class="logo">
        <img src={logo} alt=""></img>
      </div>
      <button className="nav-toggle">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
