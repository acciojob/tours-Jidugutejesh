import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import toursData from "./data";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTours = () => {
    setLoading(true);
    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    }, 900);
  };

  useEffect(() => {
    loadTours();
  }, []);

  return (
    <main id="main">
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div>
          <p>No tours left</p>
          <button onClick={loadTours}>Refresh</button>
        </div>
      ) : (
        <Tours
          tours={tours}
          onRemove={(id) => setTours(prev => prev.filter(t => t.id !== id))}
        />
      )}
    </main>
  );
};

export default App;
