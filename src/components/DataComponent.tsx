import * as api from "../services/ApiService";
import { useState, useEffect } from "react";
import StatusComponent from "./StatusComponent";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const DataComponent = () => {
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
    <div className="data-component">
      <StatusComponent />
      {/* <div className="card">
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
      </div> */}
    </div>
  );
};

export default DataComponent;
