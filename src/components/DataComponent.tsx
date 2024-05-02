import * as api from "../services/ApiService";
import { useState, useEffect } from "react";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface DataComponentProps {
  onLogout: () => void;
}

const DataComponent: React.FC<DataComponentProps> = ({ onLogout }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    await sleep(800);
    api
      .getUser("lovelyUser")
      .then((response) => {
        setData(response);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  if (error) return <div>Error loading data</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom fixed-top">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Simple header</span>
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
      <div className="card">
        <div className="card-header">Backend response</div>
        <div className="card-body">
          <h5>Server is alive</h5>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <button
            type="button"
            className="btn btn-info"
            disabled={loading}
            onClick={loadData}
          >
            Update Status
          </button>
        </div>
      </div>
    </>
  );
};

export default DataComponent;
