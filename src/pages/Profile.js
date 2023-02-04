import React, { useState, useEffect } from "react";
import { getUserToken } from "../utils/authToken";
import AssociateForm from "../components/AssociateForm";
import EditAssociate from "../components/EditAssociate";
import ProjectForm from "../components/PorjectForm";

const AssociateProfile = () => {
  const token = getUserToken();
  const [associate, setAssociate] = useState(null);

  const fetchAssociate = async () => {
    try {
      const res = await fetch("https://wcs.herokuapp.com/associate", {
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
      console.log(associate);
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
      {associate.error === "Associate not found" ? (
        <>
          <h1>Make a profile</h1>
          {token ? <AssociateForm setAssociate={setAssociate} /> : null}
        </>
      ) : (
        <>
          <p>Name: {associate.associate.name}</p>
          <p>Email: {associate.associate.email}</p>
          <p>Role: {associate.associate.role}</p>
          {token ? (
            <>
              <EditAssociate
                setAssociate={setAssociate}
                associate={associate}
              />

              <ProjectForm />
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default AssociateProfile;
