import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home&nbsp;</Link>
        <Link to={"/projects"}>Projects&nbsp;</Link>
        <Link to={"/about"}>About us&nbsp;</Link>
        <Link to={"/contact"}>Contact Us&nbsp;</Link>
        <Link to={"/Auth"}>Log In&nbsp;</Link>
        <Link to={"/Profile"}>Profile</Link>
      </nav>
    </div>
  );
}
