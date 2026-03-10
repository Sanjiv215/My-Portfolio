import React from "react";
import codek from "../images/codek.png";
import intellinotes from "../images/intellinotes.png";

function Projects() {
  const projects = [
    {
      name: "Codek",
      image: codek,
      link: "https://codekdeployed.vercel.app",
    },
    {
      name: "Intelli-Notes",
      image: intellinotes,
      link: "https://intelli-notes-psi.vercel.app/",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} />

            <h3>{project.name}</h3>

            <a href={project.link} target="_blank">
              <button>Live Demo</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
