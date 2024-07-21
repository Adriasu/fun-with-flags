import { Search } from "lucide-react";
import React from "react";

const SearchCountry = ({dataCountries}) => {
  const countryFinder = (e) => {
    e.preventDefault();
    const letterInput = e.target.value.toLowerCase();
    //console.log(letra);

    const filterArray = dataCountries.filter((country) => {
      const letterApi = country.name.common.toLowerCase();
      if (letterApi.indexOf(letterInput) !== -1) {
        return country;
      }
    });
  };

  return (
    <div className="flex">
      <Search />
      <input
        onKeyUp={countryFinder}
        type="text"
        placeholder="Search of a country"
      />
    </div>
  );
};

export default SearchCountry;
