import { UserContext } from "../data/";
import { useContext } from "react";
import { setUserToken, clearUserToken } from "../utils/authToken";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
function Auth(props) {
  const { setAuth, setUser } = useContext(UserContext);
  const RegisterUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const newUser = await fetch(
        "http://localhost:4000/auth/register",
        configs
      );

      const parsedUser = await newUser.json();
      // console.log(parsedUser)

      // sets local storage
      setUserToken(parsedUser.token);
      // put the returned user object in state
      setUser(parsedUser.user);
      // adds a boolean cast of the responses isAuthenticated prop
      setAuth(parsedUser.isLoggedIn);

      // alternative (safer) implementation would be to use jwt decode library - <https://www.npmjs.com/package/jwt-decode>
      // this would also require reconfiguring our backend so we only send tokens with a signup

      return parsedUser;
    } catch (err) {
      console.log(err);
      clearUserToken();
      setAuth(false);
    }
  };
  const loginUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("http://localhost:4000/auth/login", configs);

      const currentUser = await response.json();
      //console.log(currentUser)

      if (currentUser.token) {
        // sets local storage
        setUserToken(currentUser.token);
        // put the returned user object in state
        setUser(currentUser.user);
        setAuth(currentUser.isLoggedIn);

        return currentUser;
      } else {
        throw `Server Error: ${currentUser.statusText}`;
      }
    } catch (err) {
      console.log(err);
      clearUserToken();
      setAuth(false);
    }
  };

  // we will replace our placeholder jsx with a section container and a RegisterForm component
  return (
    <section>
      <h1>Login / Register Container</h1>
      <RegisterForm signUp={RegisterUser} />
      <LoginForm signIn={loginUser} />
    </section>
  );
}

export default Auth;
