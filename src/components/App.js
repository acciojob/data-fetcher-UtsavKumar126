
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/prodt");
      const result = await response.json();

      if (result && result.length > 0) {
        setData(result);
      } else {
        setData([]);
        setError("No data found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Do not remove the main div */}
      {loading && <h1>Loading...</h1>}
      {error && <div>{error}</div>}
      {!loading && !error && data.length > 0 && (
        <div>
          <h1>Data Fetched from API</h1>
          <pre>{JSON.stringify(data)}</pre>
        </div>
      )}
      {!loading && !error && data.length === 0 && <div>No data found</div>}
    </div>
  );
};

export default App;

