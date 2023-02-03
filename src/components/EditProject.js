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
      const response = await fetch(`http://localhost:4000/project/${id}`, {
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

  return (
    <form>
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
      <button onSubmit={handleSubmit} type="submit">
        Save Changes
      </button>
    </form>
  );
};

export default EditProject;
