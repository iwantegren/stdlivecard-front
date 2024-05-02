import "../App.css";

interface LoginProps {
  onLogin: () => void;
}

const UserLogin: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="card login-card">
      <div className="card-header">Login</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="inputUser">User name</label>
            <input
              type="text"
              className="form-control"
              id="inputUser"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={onLogin}
            accessKey="l"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
