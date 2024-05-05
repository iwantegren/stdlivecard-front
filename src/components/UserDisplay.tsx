import * as api from "../services/ApiService";
import { useState, useEffect } from "react";
import ServerErrorLogo from "../assets/server-error.svg";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-grow-1">
      <div className="spinner-grow mx-3" role="status">
        <span className="sr-only"></span>
      </div>
      <div>
        <b>Loading...</b>
      </div>
    </div>
  );
};

const ErrorLoading = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <img
        className="my-3"
        src={ServerErrorLogo}
        alt="Server error Logo"
        width={100}
        height={100}
      />
      <span className="fs-4">Can't connect server...</span>
    </div>
  );
};

const UserDisplay = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    await sleep(1400);
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

  return (
    <div className="user-display-component">
      {loading && <Loading />}
      {!loading && error && <ErrorLoading />}
      {data && (
        <div className="card flex-grow-1">
          <div className="card-header">Backend response</div>
          <div className="card-body">
            <h5>Server is alive</h5>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button
              type="button"
              className="btn btn-info"
              disabled={loading}
              onClick={loadData}
              accessKey="u"
            >
              Update Status
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDisplay;
