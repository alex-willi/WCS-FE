import { Link } from "react-router-dom";
import { getUserToken, clearUserToken } from "../utils/authToken";
import { useState, useEffect } from "react";
export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = getUserToken();
  useEffect(() => {
    setIsLoggedIn(!!token);
    console.log(typeof !!token);
  }, [token]);
  const handleLogOut = () => {
    clearUserToken();
    setIsLoggedIn(false);
  };
  return (
    <div>
      <nav>
        <Link to={"/"}>Home&nbsp;</Link>
        <Link to={"/projects"}>Projects&nbsp;</Link>
        <Link to={"/about"}>About us&nbsp;</Link>
        <Link to={"/contact"}>Contact Us&nbsp;</Link>
        {token ? (
          ((<Link to={"/Profile"}>Profile</Link>),
          (<button onClick={() => handleLogOut()}>Log Out</button>))
        ) : (
          <Link to={"/Auth"}>Log In&nbsp;</Link>
        )}
      </nav>
    </div>
  );
}
