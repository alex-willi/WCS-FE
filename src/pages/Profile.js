import React, { useState, useEffect } from "react";
import { getUserToken } from "../utils/authToken";
import { Link } from "react-router-dom";
import AssociateForm from "../components/AssociateForm";

const AssociateProfile = () => {
  const [associate, setAssociate] = useState(null);

  const fetchAssociate = async () => {
    try {
      const res = await fetch("http://localhost:4000/associate", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getUserToken()}`,
        },
      });
      const data = await res.json();
      if (!data) {
        throw new Error("Associate not found");
      }
      setAssociate(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchAssociate();
  }, []);

  if (!associate) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Associate Profile</h1>
      <p>Name: {associate.name}</p>
      <p>Email: {associate.email}</p>
      <p>Role: {associate.role}</p>
      <Link to={`/edit/${associate.id}`}>Edit</Link>
      <AssociateForm />
    </div>
  );
};

export default AssociateProfile;
