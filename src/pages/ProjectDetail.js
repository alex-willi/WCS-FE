import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserToken } from "../utils/authToken";
import EditProject from "../components/EditProject";
const ProjectDetail = () => {
  const token = getUserToken();
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`https://wcs.herokuapp.com/project/${id}`);
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
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="card m-3 justify-content-center"
          style={{ width: "60%", height: "500px", overflow: "auto" }}
        >
          <div className="d-flex align-items-center" style={{ height: "100%" }}>
            <img
              src={project.img}
              alt={project.name}
              className="card-img-left"
              style={{ maxWidth: "40%", marginRight: "20px" }}
            />
            <div className="card-body" style={{ width: "60%" }}>
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
              <p className="card-text">Client: {project.client}</p>
              <p className="card-text">Associates: {project.associates}</p>
            </div>
          </div>
        </div>
        {token ? (
          <div
            className="card m-3 justify-content-center"
            style={{ width: "60%", height: "500px" }}
          >
            <div className="card-body">
              <EditProject setProject={setProject} />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
};

export default ProjectDetail;
