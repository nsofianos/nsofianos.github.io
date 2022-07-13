import "./ProjectsList.scss";

function ProjectsList({ projects, setSelected, currentSelected }) {
  return (
    <ul className="list">
      {projects.map((project) => {
        return (
          <li
            className={
              currentSelected === project.id ? "list-item active" : "list-item"
            }
            key={project.id}
            id={project.id}
            onClick={() => setSelected(project.id)}
          >
            {project.title}
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectsList;
