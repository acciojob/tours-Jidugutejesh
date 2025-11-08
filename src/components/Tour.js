import React, { useState } from "react";

function Tour({ tour, onRemove }) {
  const [isOpen, setIsOpen] = useState(false);

  const short = tour.info.slice(0, 200);
  const displayText = isOpen
  ? tour.info
  : short + (tour.info.length > 200 ? "..." : "");


  const btnText = isOpen ? "Show less" : "Show more"; // ← exact words for tests
  const btnId = `see-${isOpen ? "less" : "more"}-${tour.id}`; // ← Cypress looks for see-more-*

  return (
    <article className="tour-card">
      <img
        src={tour.image}
        alt={tour.name}
        className="tour-img"
        referrerPolicy="no-referrer"
      />

      <h3>{tour.name}</h3>
      <h5>${Number(String(tour.price).replace(/,/g, ""))?.toLocaleString()}</h5>

      {/* Cypress selector expects this id */}
      <p id={`tour-item-para-${tour.id}`}>{displayText}</p>

      <div className="tour-actions">
        {/* Cypress selector expects this id and this exact text */}
<button id={`see-more-${tour.id}`} onClick={() => setIsOpen(!isOpen)}>
  {btnText}
</button>


        {/* Cypress selector expects this id */}
        <button id={`delete-btn-${tour.id}`} onClick={() => onRemove(tour.id)}>
          Remove
        </button>
      </div>
    </article>
  );
}

export default Tour;
