import React, { useState } from "react";

function Tour({ tour, onRemove }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(tour.image);

  const short = tour.info.slice(0, 200);
  const displayText =
    isOpen ? tour.info : short + (tour.info.length > 200 ? "…" : "");
  const btnLabel = isOpen ? "Show less" : "Show more";
  const price = `$${Number(String(tour.price).replace(/,/g, ""))?.toLocaleString()}`;

  return (
    <article className="tour-card">
      <img
        src={imgSrc}
        alt={tour.name}
        referrerPolicy="no-referrer"
        onError={() => setImgSrc("https://picsum.photos/600/360?blur=2")}
        className="tour-img"
      />

      <header className="tour-head">
        <h3 className="tour-title">{tour.name}</h3>
        <span className="tour-price">{price}</span>
      </header>

      <p className="tour-info">{displayText}</p>

      <div className="tour-actions">
        <button className="btn" onClick={() => setIsOpen((p) => !p)}>
          {btnLabel}
        </button>
        <button className="btn danger" onClick={() => onRemove(tour.id)}>
          Remove
        </button>
      </div>
    </article>
  );
}

export default Tour;
