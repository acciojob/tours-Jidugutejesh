import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import toursData from "../data";
import "../styles/App.css";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTours = () => {
    setLoading(true);
    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    loadTours();
  }, []);

  const removeTour = (id) => {
    setTours((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <main className="container">
      <h1 className="app-title">Tours</h1>

      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div className="empty">
          <p>No tours left</p>
          <button className="btn" onClick={loadTours}>
            Refresh
          </button>
        </div>
      ) : (
        <Tours tours={tours} onRemove={removeTour} />
      )}
    </main>
  );
}

export default App;
