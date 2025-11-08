import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import toursData from "../data";
import "../styles/App.css"; // NOTE: path from components/ -> styles/

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTours = () => {
    setLoading(true);
    // simulate fetch
    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadTours();
  }, []);

  const removeTour = (id) => {
    setTours((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <main id="main">
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div className="empty">
          <p>No tours left</p>
          <button id="refresh-btn" onClick={loadTours}>
            Refresh
          </button>
        </div>
      ) : (
        <Tours tours={tours} onRemove={removeTour} />
      )}
    </main>
  );
};

export default App;
