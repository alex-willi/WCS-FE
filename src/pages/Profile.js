import React, { useState, useEffect } from "react";
import { getUserToken } from "../utils/authToken";
import AssociateForm from "../components/AssociateForm";
import EditAssociate from "../components/EditAssociate";
import ProjectForm from "../components/PorjectForm";
import RegisterForm from "../components/RegisterForm";

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
    <div class="container mt-5">
      <h1 class="text-center">Associate Profile</h1>
      {associate.error === "Associate not found" ? (
        <>
          <h1 class="text-center">Make a profile</h1>
          {token ? (
            <div class="card mb-3">
              <div class="card-body">
                <AssociateForm setAssociate={setAssociate} />
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div class="card mb-3">
            <div class="card-body">
              <p class="card-text">Name: {associate.associate.name}</p>
              <p class="card-text">Email: {associate.associate.email}</p>
              <p class="card-text">Role: {associate.associate.role}</p>
            </div>
          </div>
          {token ? (
            <>
              <div class="card mb-3">
                <div class="card-body">
                  <EditAssociate
                    setAssociate={setAssociate}
                    associate={associate}
                  />
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-body">
                  <ProjectForm />
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-body">
                  <RegisterForm />
                </div>
              </div>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default AssociateProfile;
