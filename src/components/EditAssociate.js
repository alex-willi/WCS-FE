import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getUserToken } from "../utils/authToken";

const EditAssociate = () => {
  const token = getUserToken();
  const [associateForm, setAssociateForm] = useState({
    name: "",
    email: "",
    role: "",
  });
  const { id } = useParams();

  const handleChange = (event) => {
    setAssociateForm({
      ...associateForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://wcs.herokuapp.com/associate/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(associateForm),
        }
      );
      const associate = await response.json();
      setAssociateForm(associate);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(
        `https://wcs.herokuapp.com/associate/${id}`,
        requestOptions
      );
      const deletedAssociate = await response.json();
      console.log(deletedAssociate);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={associateForm.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={associateForm.email}
          onChange={handleChange}
        />
        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          name="role"
          value={associateForm.role}
          onChange={handleChange}
        />
        <button type="submit">Save Changes</button>
      </form>
      <button onClick={handleDelete} type="button">
        DELETE
      </button>
    </div>
  );
};

export default EditAssociate;
