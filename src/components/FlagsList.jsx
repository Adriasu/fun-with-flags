import React, { useState, useEffect } from "react";
import CardFlag from "./CardFlag";
import ThemeBar from "./ThemeBar";

const FlagsList = () => {
  const [countries, setCountries] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const dataCountries = await response.json();
      setCountries(dataCountries);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  console.log(countries);

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
      <ThemeBar />
      <div className="grid grid-cols-4 gap-5">
        {countries.map((country, i) => {
          return <CardFlag key={i} countryInfo={country} />;
        })}
      </div>
    </div>
  );
};

export default FlagsList;
