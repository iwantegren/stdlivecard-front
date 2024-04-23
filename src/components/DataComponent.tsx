import * as api from "../services/ApiService";
import { useState, useEffect } from "react";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const DataComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    await sleep(1000);
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
    <div>
      <h1>Server is alive</h1>
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
  );
};

export default DataComponent;
