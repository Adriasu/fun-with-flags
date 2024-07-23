import React, { useState, useEffect } from "react";
import CardFlag from "./CardFlag";
import SelectRegion from "./SelectRegion";
import SearchCountry from "./SearchCountry";

const FlagsList = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const dataCountries = await response.json();
      setCountries(dataCountries);
      setFilterCountries(dataCountries);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  //console.log(countries);

  if (isLoading) {
    return (
      <div className="flex flex-row gap-2">
        <div className="animate-pulse bg-gray-300 w-12 h-12 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <div className="animate-pulse bg-gray-300 w-28 h-5 rounded-full"></div>
          <div className="animate-pulse bg-gray-300 w-36 h-5 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form>
        <div className="flex px-[50px] justify-between items-center h-[72px]">
          <SearchCountry
            dataCountries={countries}
            filterCountriesState={setFilterCountries}
          />
          <div></div>
          <SelectRegion
            dataCountries={countries}
            filterCountriesState={setFilterCountries}
          />
        </div>
      </form>
      <div className="pt-[100px] px-[50px] flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {filterCountries.map((country, i) => {
            return (
              <CardFlag
                key={i}
                countryInfo={country}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlagsList;
