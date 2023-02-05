import { UserContext } from "../data/";
import { useContext } from "react";
import { setUserToken, clearUserToken } from "../utils/authToken";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
function Auth(props) {
  const { setAuth, setUser } = useContext(UserContext);

  const loginUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        "https://wcs.herokuapp.com/auth/login",
        configs
      );

      const currentUser = await response.json();

      if (currentUser.token) {
        setUserToken(currentUser.token);
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

  return (
    <section>
      <h1>Login / Register Container</h1>
      <LoginForm signIn={loginUser} />
    </section>
  );
}

export default Auth;
