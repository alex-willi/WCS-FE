import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../data/";
import { useContext } from "react";
import { setUserToken, clearUserToken } from "../utils/authToken";
const RegisterForm = () => {
  const { setAuth, setUser } = useContext(UserContext);
  const initialState = { username: "", password: "" };
  const [input, setInput] = useState(initialState);
  const navigate = useNavigate();
  const register = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const newUser = await fetch(
        "https://wcs.herokuapp.com/auth/register",
        configs
      );

      const parsedUser = await newUser.json();

      setUserToken(parsedUser.token);
      setUser(parsedUser.user);
      setAuth(parsedUser.isLoggedIn);

      return parsedUser;
    } catch (err) {
      console.log(err);
      clearUserToken();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdUserToken = await register(input);

    if (createdUserToken) {
      navigate("/");
    } else {
      navigate("/");
    }
    setInput(initialState);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
      <h1>Register a new user</h1>
      <div className="form-group">
        <label htmlFor="username">Name: </label>
        <input
          id="username"
          name="username"
          value={input.username}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={input.password}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
