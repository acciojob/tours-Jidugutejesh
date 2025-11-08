import React, { useState } from "react";

function Tour({ tour, onRemove }) {
  const [open, setOpen] = useState(false);

  const short = tour.info.slice(0, 200);
  const text = open ? tour.info : short + (tour.info.length > 200 ? "..." : "");

  const price = `$${Number(String(tour.price).replace(/,/g, ""))?.toLocaleString()}`;

  return (
    <article className="tour" id={`tour-item-${tour.id}`}>
      <img
        className="tour-img"
        src={tour.image}
        alt={tour.name}
        referrerPolicy="no-referrer"
      />

      <header className="tour-head">
        <h3>{tour.name}</h3>
        <span className="tour-price">{price}</span>
      </header>

      <p id={`tour-item-para-${tour.id}`}>{text}</p>

      <div className="tour-actions">
        <button
          id={`toggle-btn-${tour.id}`}
          onClick={() => setOpen((p) => !p)}
        >
          {open ? "Show less" : "Show more"}
        </button>

        <button
          id={`delete-btn-${tour.id}`}
          onClick={() => onRemove(tour.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
}

export default Tour;
