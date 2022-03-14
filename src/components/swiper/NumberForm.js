import React, { useState } from "react";

const NumberForm = ({ updateTheList }) => {
  const [customNumber, setCustomNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTheList(customNumber);
  };

  const handleChange = (e) => {
    if (parseInt(e.target.value)) setCustomNumber(parseInt(e.target.value));

    if (e.target.value === "") setCustomNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={customNumber}
        type="text"
        name="custom-number"
        className="custom-number"
        maxLength={5}
      />
      <button className="submit">Add</button>
    </form>
  );
};

export default NumberForm;
