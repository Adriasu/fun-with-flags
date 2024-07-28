/* eslint-disable array-callback-return */
import { Search } from "lucide-react";
import React from "react";

const SearchCountry = ({ dataCountries, filterCountriesState }) => {
  const countryFinder = (e) => {
    e.preventDefault();
    const letterInput = e.target.value.toLowerCase();
    //console.log(letra);

    const filterArray = dataCountries.filter((country) => {
      const letterApi = country.name.common.toLowerCase();
      if (letterApi.indexOf(letterInput) !== -1) {
        return country;
      }
      return;
    });

    filterCountriesState(filterArray);
  };

  return (
    <div className="flex border-[2px] border-[#e1e8f0] dark:border-[#40454f] rounded-lg h-10 justify-center items-center gap-2 p-2 focus-within:border-[#3082cf]">
      <Search className="text-[#ccd6e0]" />
      <input
        className="outline-none rounded-lg dark:bg-[#1a202b]"
        onKeyUp={countryFinder}
        type="text"
        placeholder="Search of a country"
      />
    </div>
  );
};

export default SearchCountry;
