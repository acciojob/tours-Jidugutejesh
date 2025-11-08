import React, { useState } from "react";

function Tour({ tour, onRemove }) {
  const [isOpen, setIsOpen] = useState(false);

  const isLong = tour.info.length > 200;
  const shortText = tour.info.slice(0, 200) + "...";
  const displayText = isOpen ? tour.info : shortText;

  const btnText = isOpen ? "Show less" : "Show more";

  const btnId = isOpen
    ? `see-less-${tour.id}`
    : `see-more-${tour.id}`;

  return (
    <article className="tour-card">
      <img
        src={tour.image}
        alt={tour.name}
        className="tour-img"
        referrerPolicy="no-referrer"
      />

      <h3>{tour.name}</h3>
      <h5>${tour.price}</h5>

      <p id={`tour-item-para-${tour.id}`}>{displayText}</p>

      <div className="tour-actions">
        <button id={btnId} onClick={() => setIsOpen(!isOpen)}>
          {btnText}
        </button>

        <button id={`delete-btn-${tour.id}`} onClick={() => onRemove(tour.id)}>
          Remove
        </button>
      </div>
    </article>
  );
}

export default Tour;
