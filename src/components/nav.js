import { Link } from "react-router-dom";
import { getUserToken, clearUserToken } from "../utils/authToken";
export default function Nav() {
  const token = getUserToken();
  return (
    <div>
      <nav>
        <Link to={"/"}>Home&nbsp;</Link>
        <Link to={"/projects"}>Projects&nbsp;</Link>
        <Link to={"/about"}>About us&nbsp;</Link>
        <Link to={"/contact"}>Contact Us&nbsp;</Link>
        {token ? (
          ((<Link to={"/Profile"}>Profile</Link>),
          (<button onClick={() => clearUserToken()}>Log Out</button>))
        ) : (
          <Link to={"/Auth"}>Log In&nbsp;</Link>
        )}
        <Link to={"/Auth"}>Log In&nbsp;</Link>
      </nav>
    </div>
  );
}
