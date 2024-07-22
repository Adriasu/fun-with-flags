import React from "react";

const SelectRegion = ({regions}) => {
  const handleChange = (e) => {
    const region = e.target.value
    console.log(region);

  };

  return (
    <div>
      <select onChange={handleChange} name="region" id="region">
        <option value="">Select Option</option>
        <option value="">All</option>
        <option value="">Africa</option>
        <option value="">Asia</option>
        <option value="">Europe</option>
        <option value="">Oceania</option>
      </select>
    </div>
  );
};

export default SelectRegion;
