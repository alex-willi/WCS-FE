import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { UserContext } from "./data/index";
import { useState } from "react";
console.log(UserContext);

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
        <Link to="/auth">auth</Link> <Link to="/home">home</Link>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </UserInfo>
    </div>
  );
}

export default App;
