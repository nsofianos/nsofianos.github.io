import "./App.scss";
import NavBar from "./Nav/NavBar.js";
import Intro from "./Sections/Intro";
import Services from "./Sections/Services";
import About from "./Sections/About";
import Work from "./Sections/Work";
import Footer from "./Sections/Footer";
import SideBar from "./Nav/SideBar";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faEnvelope);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="app">
      <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="sections">
        <Intro />
        <Services />
        <About />
        <Work />
        <Footer />
      </div>
    </div>
  );
}

export default App;
