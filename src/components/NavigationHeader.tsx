import { useContext } from "react";
import { LoginContext, LoginContextType } from "../contexts/LoginContext";
import HealthLogo from "../assets/health.svg";

const NavigationHeader = () => {
  const { loginData, onLogout } = useContext(LoginContext) as LoginContextType;

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom fixed-top">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <img
          className="mx-3"
          src={HealthLogo}
          alt="Health Logo"
          width={40}
          height={40}
        />
        <span className="fs-4">Hello, {loginData.username}</span>
      </a>

      <ul className="nav nav-pills mx-3">
        <li>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onLogout}
            accessKey="l"
          >
            Log out
          </button>
        </li>
      </ul>
    </header>
  );
};

export default NavigationHeader;
