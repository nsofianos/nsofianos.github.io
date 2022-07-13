import "./ProjectsList.scss";
import { useState } from "react";

function ProjectsList({ projects }) {
  const [selected, setSelected] = useState("featured");
  return (
    <ul>
      {projects.map((project) => {
        return (
          <li
            className={
              selected === project.id ? "list-item active" : "list-item"
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
