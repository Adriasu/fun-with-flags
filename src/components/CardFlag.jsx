import React from "react";
import { Link } from "react-router-dom";

const CardFlag = ({ countryInfo, selectedCountry }) => {
 
  return (
    <div className="w-[320px] h-[380px] flex flex-col border-[1px] border-[#e1e8f0] rounded-md">
      <img
        className="w-max-full h-[200px] rounded-md border-[1px] border-[#e1e8f0]"
        src={countryInfo.flags.svg}
        alt={countryInfo.name.common}
      />

      <div className="h-[160px] w-full p-[24px]">
        <p>{countryInfo.name.common}</p>
        <p>Population: {countryInfo.population.toLocaleString("en")}</p>
        <p>Region: {countryInfo.region}</p>
        <p>Capital: {countryInfo.capital}</p>
        <Link to={`/${countryInfo.name.common}`}>More</Link>
      </div>
    </div>
  );
};

export default CardFlag;
