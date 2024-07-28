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
    <div className="p-4 border-[2px] border-[#e1e8f0] rounded-lg h-10 flex justify-center items-center focus-within:border-[#3082cf]">
      <select onChange={handleChange} name="region" id="region" className="outline-none">
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
