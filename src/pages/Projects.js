import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("https://wcs.herokuapp.com/project");
      const data = await response.json();
      setProjects(data);
    }

    fetchProjects();
  }, []);
  console.log(projects);
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project._id}>
          <Link to={`/project/${project.id}`}>
            <h3>{project.name}</h3>
          </Link>
          <p>Description: {project.description}</p>
          <p>Client: {project.client}</p>
          <p>Associates: {project.associates}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
