import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUserToken } from "../utils/authToken";
const ProjectForm = () => {
  const navigate = useNavigate();
  const token = getUserToken();
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    description: "",
    client: "",
    associates: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://wcs.herokuapp.com/project/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/projects");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="col-md-6 mx-auto">
      <h1>Make A New Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="img"
            placeholder="img URL"
            value={formData.img}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="client"
            placeholder="Client Name"
            value={formData.client}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="associates"
            placeholder="Associate Names"
            value={formData.associates}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
