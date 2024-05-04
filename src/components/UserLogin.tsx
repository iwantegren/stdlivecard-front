import { useContext } from "react";
import "../App.css";
import { LoginContext, LoginContextType } from "../contexts/LoginContext";

const UserLogin = () => {
  const { loginData, setLoginData, onLogin } = useContext(
    LoginContext
  ) as LoginContextType;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loginData.username === "" || loginData.password === "") {
      alert("Username and password are required!");
      return;
    }

    onLogin();
  };

  return (
    <div className="card login-card">
      <div className="card-header">Login</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputUser">User name</label>
            <input
              type="text"
              className="form-control"
              id="inputUser"
              placeholder="Enter name"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3" accessKey="l">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
