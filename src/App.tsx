import MainComponent from "./components/MainComponent";
import UserLogin from "./components/UserLogin";
import "./App.css";
import { useState } from "react";
import {
  EmptyLoginData,
  LoginContext,
  LoginData,
} from "./contexts/LoginContext";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>(new EmptyLoginData());

  const onLogin = () => setLoggedIn(true);
  const onLogout = () => {
    setLoggedIn(false);
    setLoginData(new EmptyLoginData());
  };

  return (
    <div className="app-container">
      <LoginContext.Provider
        value={{ loginData, setLoginData, onLogin, onLogout }}
      >
        {isLoggedIn ? <MainComponent /> : <UserLogin />}
      </LoginContext.Provider>
    </div>
  );
};

export default App;
