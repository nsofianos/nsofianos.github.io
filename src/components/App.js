import "./App.scss";
import NavBar from "./NavBar.js";
import Intro from "./Intro";
import Services from "./Services";
import About from "./About";
import Work from "./Work";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="app">
      <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
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
