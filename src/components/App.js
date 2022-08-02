import "./App.scss";
import NavBar from "./Nav/NavBar.js";
import Intro from "./Sections/Intro/Intro";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import SideBar from "./Nav/SideBar";
import About from "./Sections/About/About";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="app">
      <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
