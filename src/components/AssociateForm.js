import React, { useState } from "react";

const AssociateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const { name, email, role } = formData;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <input type="text" name="role" value={role} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AssociateForm;
