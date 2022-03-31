import "./App.css";
import Header from "./Header.js";
import Intro from "./Intro";
import Services from "./Services";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Services />
      <About />
    </div>
  );
}

export default App;
