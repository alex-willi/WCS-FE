import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateDeleteAssociate = (props) => {
  // define our state variable - []
  // react state
  const [associate, setAssociate] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  const { id } = useParams();
  const BASE_URL = `http://localhost:4000/associate/${id}`;

  const getAssociate = async () => {
    try {
      const response = await fetch(BASE_URL);
      console.log(BASE_URL);
      const foundAssociate = await response.json();
      setAssociate(foundAssociate);
      setEditForm(foundAssociate);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const userInput = { ...editForm };
    userInput[e.target.name] = e.target.value;
    setEditForm(userInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. capturing our local state
    const currentState = { ...associate, ...editForm };
    console.log(currentState);
    // check any fields for property data types / truthy value (function call - stretch)
    try {
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentState),
      };
      // 2. specify request method , headers, Content-Type
      // 3. make fetch to BE - sending data (requestOptions)

      // 3a fetch sends the data to API - (mongo)
      const response = await fetch(BASE_URL, requestOptions);
      // 4. check our response -
      // 5. parse the data from the response into JS (from JSON)
      const updatedAssociate = await response.json();
      console.log(updatedAssociate);
      // update local state with response (json from be)
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "DELETE",
      };
      const response = await fetch(BASE_URL, requestOptions);
      const deletedAssociate = await response.json();
      console.log(deletedAssociate);
    } catch (err) {
      console.log(err);
    }
  };

  const loaded = () => {
    return (
      <>
        <section>
          <div className="person-card">
            {/* React optimization / difference */}
            <h1>{associate.name}</h1>
            <h1>{associate.email}</h1>
            <h3>{associate.role || "Not role given"}</h3>
          </div>
        </section>
      </>
    );
  };

  const loading = () => (
    <section className="people-list">
      <h1>Loading...</h1>
    </section>
  );

  useEffect(() => {
    getAssociate();
  }, []);
  // useEffect takes two arguments -> runs function upon component mount
  // react mount ->
  return (
    <div>
      <section>
        <h2>Create a new person</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                placeholder="enter a person's name"
                value={editForm.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              email
              <input
                type="text"
                id="email"
                name="email"
                placeholder="enter a person's email"
                value={editForm.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="role">
              role
              <input
                type="text"
                id="role"
                name="role"
                placeholder="enter a person's role"
                value={editForm.role}
                onChange={handleChange}
              />
            </label>
            <br />
            <input type="submit" value="Edit a person" />
          </div>
        </form>
        <button onClick={handleDelete}>DELET</button>
      </section>
      {associate ? loaded() : loading()}
    </div>
  );
};

export default UpdateDeleteAssociate;
