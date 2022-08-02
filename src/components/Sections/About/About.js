import "./About.scss";
import Badge from "./Badge";
function About() {
  return (
    <section className="about" id="about">
      <h1>About me</h1>
      <p className="label-txt">My introduction</p>
      <div className="wrapper">
        <div className="about-left">
          <img src="images/me.jpg"></img>
        </div>
        <div className="about-right">
          <p className="intro-txt">
            I'm a Vancouver-based full-stack web developer with a genuine
            passion for building aethetic, responsive web applications from
            front to back. I gathered my first experiences building web apps
            while enrolled in Lighthouse Labs, where I then moved on to work as
            a student mentor. If you're in need of a people loving,
            detail-oriented problem solver - I'm your guy.
          </p>
          <div className="badges">
            <Badge num="01" title="Years experience" />
            <Badge num="10" title="Completed projects" />
            <Badge num="01" title="Companies worked" />
          </div>
          <button>
            Download CV <i className="uil uil-download-alt"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
