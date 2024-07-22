import React from "react";

const SelectRegion = ({ filterCountriesState, dataCountries }) => {
  const handleChange = (e) => {
    const region = e.target.value;
    if (region === "") {
      return filterCountriesState(dataCountries);
    } else {
      const filterArray = dataCountries.filter(
        (country) => country.region === region
      );
      return filterCountriesState(filterArray);
    }
  };

  return (
    <div>
      <select onChange={handleChange} name="region" id="region">
        <option value="" disabled selected>Select Option</option>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SelectRegion;
