import "./Projects.scss";
import ProjectsList from "./ProjectsList";

function Projects() {
  const projects = [
    { id: "featured", title: "Featured" },
    { id: "react", title: "React" },
    { id: "api", title: "API connected" },
    { id: "os", title: "Open Source" },
    { id: "commissioned", title: "Commissioned" },
  ];

  return (
    <section className="projects" id="projects">
      <h1>Portfolio</h1>
      <ProjectsList projects={projects} />
      <div className="container">
        <div className="item">
          <img
            src="https://www.oclocksoftware.com/blog/wp-content/uploads/2017/08/difference-between-mobile-app-and-website-development.png"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.oclocksoftware.com/blog/wp-content/uploads/2017/08/difference-between-mobile-app-and-website-development.png"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.oclocksoftware.com/blog/wp-content/uploads/2017/08/difference-between-mobile-app-and-website-development.png"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="/images/assets/mobile.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.oclocksoftware.com/blog/wp-content/uploads/2017/08/difference-between-mobile-app-and-website-development.png"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.oclocksoftware.com/blog/wp-content/uploads/2017/08/difference-between-mobile-app-and-website-development.png"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </section>
  );
}

export default Projects;
