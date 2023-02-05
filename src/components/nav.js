import "../styles/nav.css";
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
    <div className="navbar">
      <nav className="nav-bar">
        <Link to={"/"} className="navbar-link">
          Home&nbsp;
        </Link>
        <Link to={"/projects"} className="navbar-link">
          Projects&nbsp;
        </Link>
        <Link to={"/about"} className="navbar-link">
          About us&nbsp;
        </Link>
        <Link to={"/contact"} className="navbar-link">
          Contact Us&nbsp;
        </Link>
        {token ? (
          <>
            <Link to={"/Profile"} className="navbar-link">
              Profile
            </Link>
            <button className="nav-btn" onClick={() => handleLogOut()}>
              Log Out
            </button>
          </>
        ) : (
          <Link to={"/Auth"} className="navbar-link">
            Log In&nbsp;
          </Link>
        )}
      </nav>
    </div>
  );
}
