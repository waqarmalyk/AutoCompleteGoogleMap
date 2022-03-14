import React from "react";

const Card = ({ setDisplaySwiper, setSelectedIndex, activeIndex, number }) => {
  return (
    <div className="card">
      <div className="pay">
        <span className="pay-selected-number">{number}</span>
        <span className="pay-per-month">€/Month</span>
      </div>
      <div
        onClick={() => {
          setDisplaySwiper((prev) => !prev);
          setSelectedIndex(activeIndex);
        }}
        className="edit-button"
      >
        Edit
      </div>
    </div>
  );
};

export default Card;
