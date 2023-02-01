import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link> <Link to={"/projects"}>Projects</Link>{" "}
        <Link to={"/about"}>About us</Link>{" "}
        <Link to={"/contact"}>Contact Us</Link> <Link to={"/Auth"}>Log In</Link>
      </nav>
    </div>
  );
}
