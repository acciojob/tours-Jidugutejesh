import React from "react";
import Tour from "./Tour";

function Tours({ tours, onRemove }) {
  return (
    <section className="tours">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </section>
  );
}

export default Tours;
