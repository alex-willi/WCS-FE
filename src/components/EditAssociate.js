import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserToken } from "../utils/authToken";

const EditAssociate = ({ setAssociate, associate }) => {
  console.log(associate);
  const token = getUserToken();
  const [associateForm, setAssociateForm] = useState({
    name: "",
    email: "",
    role: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const fetchAssociate = async () => {
      try {
        const response = await fetch(`https://wcs.herokuapp.com/associate`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setAssociateForm(data.associate);
        console.log(associateForm, "THIS");
      } catch (error) {
        console.error(error);
      }
    };
    fetchAssociate();
  }, [id, token]);
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
        `https://wcs.herokuapp.com/associate/${associateForm._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(associateForm),
        }
      );
      const updateAssociate = await response.json();
      setAssociateForm(updateAssociate);
      setAssociate({ associate: updateAssociate });
      console.log(associate);
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
      await fetch(
        `https://wcs.herokuapp.com/associate/${associateForm._id}`,
        requestOptions
      );

      setAssociate({ associate: {} });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Edit Your Profile</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={associateForm.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={associateForm.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                id="role"
                type="text"
                name="role"
                value={associateForm.role}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger mt-3"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAssociate;
