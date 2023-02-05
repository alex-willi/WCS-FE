import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = ({ signIn }) => {
  const initialState = { username: "", password: "" };
  const [input, setInput] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdUserToken = await signIn(input);

    if (createdUserToken) {
      navigate("/profile");
    } else {
      navigate("/");
    }
    setInput(initialState);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} class="col-md-6 mx-auto">
      <h1>Login</h1>
      <div class="form-group">
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={input.username}
          onChange={handleChange}
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={input.password}
          onChange={handleChange}
          class="form-control"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Login User
      </button>
    </form>
  );
};

export default LoginForm;
