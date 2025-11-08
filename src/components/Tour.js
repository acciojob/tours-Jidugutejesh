import React, { useState } from "react";

function Tour({ tour, onRemove }) {
  const [isOpen, setIsOpen] = useState(false);

  // exactly 200 characters when collapsed, with "..."
  const isLong = tour.info.length > 200;
  const collapsed = isLong ? tour.info.slice(0, 200) + "..." : tour.info;
  const displayText = isOpen ? tour.info : collapsed;

  // test expects these exact labels
  const btnText = isOpen ? "Show less" : "Show more";

  // test queries by these ids:
  // initially:  #see-more-<id>
  // after open: #see-less-<id>
  const btnId = isOpen ? `see-less-${tour.id}` : `see-more-${tour.id}`;

  // format price safely
  const price = `$${Number(String(tour.price).replace(/,/g, ""))?.toLocaleString()}`;

  return (
    <article className="tour-card">
      <img
        src={tour.image}
        alt={tour.name}
        className="tour-img"
        referrerPolicy="no-referrer"
      />

      <h3>{tour.name}</h3>
      <h5>{price}</h5>

      {/* Cypress looks for this exact id */}
      <p id={`tour-item-para-${tour.id}`}>{displayText}</p>

      <div className="tour-actions">
        {/* Cypress looks for #see-more-<id> first, then #see-less-<id> */}
        <button id={btnId} onClick={() => setIsOpen((v) => !v)}>
          {btnText}
        </button>

        {/* Cypress looks for this exact id for delete */}
        <button id={`delete-btn-${tour.id}`} onClick={() => onRemove(tour.id)}>
          Remove
        </button>
      </div>
    </article>
  );
}

export default Tour;
