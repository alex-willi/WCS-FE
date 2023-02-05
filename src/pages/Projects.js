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
    <div className="container my-5">
      <h2 className="text-center mb-5">Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project._id} class="col-md-4 mb-5">
            <div className="card h-100">
              <img src={project.img} class="card-img-top" alt={project.name} />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">Description: {project.description}</p>
                <p className="card-text">Client: {project.client}</p>
                <p className="card-text">Associates: {project.associates}</p>
                <Link to={`/project/${project.id}`} class="btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
