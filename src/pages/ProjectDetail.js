import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserToken } from "../utils/authToken";
const ProjectDetail = () => {
  const token = getUserToken();
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:4000/project/${id}`);
        const data = await response.json();
        setProject(data);
        console.log(project);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProject();
  }, []);
  if (!project) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <p>Client: {project.client}</p>
        <p>Associates: {project.associates}</p>
        {token ? <Link to={`projectEdit/${project.id}`}>EDIT</Link> : null}
      </div>
    );
  }
};

export default ProjectDetail;
