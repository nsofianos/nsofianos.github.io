import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 50,
      backDelay: 1000,
      strings: [
        "Developer",
        "Frontend Enthusiast",
        "Freelancer",
        "Gym Addict",
        "Man of the People",
      ],
    });
  }, []);

  return (
    <section className="intro" id="intro">
      <div className="left">
        <div className="img-container">
          <img alt="me" src="images/sketch2.jpg"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Nik Sofianos</h1>
          <h3>
            Full time <span ref={textRef}></span>
          </h3>
          <button>
            Contact Me
            <i className="uil uil-message"></i>
          </button>
          <a className="scroll-button" href="#projects">
            <i className="uil uil-mouse-alt"></i>
            Scroll down
            <i className="uil uil-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
