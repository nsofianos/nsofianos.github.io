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
            Web developer with extensive knowledger and experience working in
            web technologies and ui design quiality work. Web developer with
            extensive knowledger and experience working in web technologies and
            ui design quiality work.
          </p>
          <div className="badges">
            <Badge num="01" title="Years experience" />
            <Badge num="10" title="Completed projects" />
            <Badge num="01" title="Companies worked" />
          </div>
          <button>Download CV</button>
        </div>
      </div>
    </section>
  );
}

export default About;
