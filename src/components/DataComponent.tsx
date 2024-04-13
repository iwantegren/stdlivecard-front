import { fetchData } from "../services/ApiService";
import { useState, useEffect } from "react";

const DataComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData().then(setData).catch(setError);
  }, []); // Empty dependency array means this effect runs once on mount

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Server is alive</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataComponent;
