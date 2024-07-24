/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const InfoCountry = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  const fetchCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const dataCountry = await response.json();
      setCountry(dataCountry);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, [name]);

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
    <div className="p-8 mx-auto max-w-7xl">
      <Link to={"/"}>BACK</Link>
      {country.map((info, i) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:place-items-center" key={i}>
          <img src={info.flags.svg} alt={info.name.common} />
          <div>
            <h1 className="font-bold text-4xl lg:text-6xl">{info.name.common}</h1>
            <h2>{info.name.official}</h2>
            <ul>
              <li>Population: {info.population.toLocaleString("en")}</li>
              <li>Region: {info.region}</li>
              <li>Subregion: {info.subregion}</li>
              <li>Capital: {info.capital}</li>

              {Object.values(info.currencies).map((value, i) => (
                <li key={i}>Currency: {value.name}</li>
              ))}

              <div className="flex">
                Language(s):
                {Object.values(info.languages).map((language, i) => (
                  <li key={i}>{language}</li>
                ))}
              </div>
            </ul>
            {info.borders && (
              <>
                <h3>Borders:</h3>
                <ul>
                  {info.borders.map((border, i) => (
                    <li key={i}>{border}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCountry;
