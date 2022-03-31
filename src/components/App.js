import "./App.css";
import Header from "./Header.js";
import Intro from "./Intro";
import Services from "./Services";
import About from "./About";
import Work from "./Work";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Services />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
