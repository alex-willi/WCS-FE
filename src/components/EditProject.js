import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserToken } from "../utils/authToken";
const EditProject = ({ setProject }) => {
  const navigate = useNavigate();
  const token = getUserToken();
  const [projectForm, setProjectForm] = useState({
    name: "",
    description: "",
    client: "",
    associates: "",
  });
  const { id } = useParams();
  const handleChange = (event) => {
    setProjectForm({
      ...projectForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://wcs.herokuapp.com/project/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(projectForm),
      });
      const project = await response.json();
      setProjectForm(project);
      setProject(project);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(
        `https://wcs.herokuapp.com/project/${id}`,
        requestOptions
      );
      const deletedAssociate = await response.json();
      console.log(deletedAssociate);
      navigate("/projects");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
      <h1>Edit this project</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={projectForm.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="img">Img URL:</label>
        <input
          type="text"
          id="img"
          name="img"
          placeholder="img URL"
          value={projectForm.img}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={projectForm.description}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="client">Client:</label>
        <input
          type="text"
          id="client"
          name="client"
          value={projectForm.client}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="associates">Associates:</label>
        <input
          type="text"
          id="associates"
          name="associates"
          value={projectForm.associates}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
        <button type="button" onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </form>
  );
};

export default EditProject;
