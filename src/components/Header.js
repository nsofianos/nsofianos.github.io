import logo from "../img/devjane.png";

function Header() {
  return (
    <header className="App-header">
      <div class="logo">
        <img src={logo} alt=""></img>
      </div>
      <button class="nav-toggle">
        <span class="hamburger"></span>
      </button>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#" class="nav__link">
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              My Services
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              About Me
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
