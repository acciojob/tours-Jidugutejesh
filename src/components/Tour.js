import React, { useState } from "react";

function Tour({ tour, onRemove }) {
  const [isOpen, setIsOpen] = useState(false);

  const short = tour.info.slice(0, 200);
  const displayText = isOpen
    ? tour.info
    : short + (tour.info.length > 200 ? "..." : "");
  const btnLabel = isOpen ? "Show less" : "Show more";

  // optional: format price safely
  const price = `$${Number(String(tour.price).replace(/,/g, ""))?.toLocaleString()}`;

  return (
    <article className="tour-card">
      <img
        src={tour.image}
        alt={tour.name}
        className="tour-img"
        referrerPolicy="no-referrer"
      />

      <header className="tour-head">
        <h3 className="tour-title">{tour.name}</h3>
        <span className="tour-price">{price}</span>
      </header>

      <p id={`tour-item-para-${tour.id}`} className="tour-info">
        {displayText}
      </p>

      <div className="tour-actions">
        {/* ✅ Cypress expects this exact id */}
        <button
          id={`see-more-${tour.id}`}
          className="btn"
          onClick={() => setIsOpen((p) => !p)}
        >
          {btnLabel}
        </button>

        {/* ✅ Cypress expects this exact id */}
        <button
          id={`delete-btn-${tour.id}`}
          className="btn danger"
          onClick={() => onRemove(tour.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
}

export default Tour;
