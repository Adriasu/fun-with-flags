import React from "react";
import { Link } from "react-router-dom";

const CardFlag = ({ countryInfo }) => {
  return (
    <div className="w-[320px] h-[380px] flex flex-col border-[1px] border-[#e1e8f0] rounded-md dark:border-[#40454f]">
      <img
        className="w-max-full h-[200px] rounded-md"
        src={countryInfo.flags.svg}
        alt={countryInfo.name.common}
      />

      <div className="h-[160px] w-full p-[24px]">
        <p>{countryInfo.name.common}</p>
        <p>Population: {countryInfo.population.toLocaleString("en")}</p>
        <p>Region: {countryInfo.region}</p>
        <p>Capital: {countryInfo.capital}</p>
        <div className="w-full flex justify-center items-center mt-2 ">
          <Link
            className="border-[1px] border-[#e1e8f0] rounded-md dark:border-[#40454f] px-3 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-[#282a33] dark:hover:bg-slate-700"
            to={`/${countryInfo.name.common}`}
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardFlag;
