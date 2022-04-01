import "./App.scss";
import Header from "./Header.js";
import Intro from "./Intro";
import Services from "./Services";
import About from "./About";
import Work from "./Work";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header />
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
