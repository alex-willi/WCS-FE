import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Nav from "./components/nav";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import { UserContext } from "./data/index";
import { useState } from "react";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import GraphicDesign from "./pages/GraphicDesign";
import WebDevelopment from "./pages/WebDevelopment";
import Advertisement from "./pages/Advertisement";
function App() {
  const { Provider: UserInfo } = UserContext;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div>
      <UserInfo
        value={{
          isAuthenticated,
          setAuth: setIsAuthenticated,
          user: currentUser,
          setUser: setCurrentUser,
        }}
      >
        <Nav />
        <Routes>
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/graphicdesign" element={<GraphicDesign />} />
          <Route path="/Advertisement" element={<Advertisement />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </UserInfo>
    </div>
  );
}

export default App;
