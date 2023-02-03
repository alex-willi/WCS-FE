import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getUserToken } from "../utils/authToken";
const EditProject = () => {
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={projectForm.name}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          value={projectForm.description}
          onChange={handleChange}
        />
        <label htmlFor="client">Client</label>
        <input
          id="client"
          type="text"
          name="client"
          value={projectForm.client}
          onChange={handleChange}
        />
        <label htmlFor="associates">associates</label>
        <input
          id="associates"
          type="text"
          name="associates"
          value={projectForm.associates}
          onChange={handleChange}
        />
        <button type="submit">Save Changes</button>
      </form>
      <button onClick={handleDelete} type="buttom">
        DELETE
      </button>
    </div>
  );
};

export default EditProject;
