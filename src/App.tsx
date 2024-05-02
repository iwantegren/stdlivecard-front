import DataComponent from "./components/DataComponent";
import UserLogin from "./components/UserLogin";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => setLoggedIn(false);

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <DataComponent onLogout={handleLogout} />
      ) : (
        <UserLogin onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
