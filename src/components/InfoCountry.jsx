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

  console.log(country);

  const cssButton = "border-[1px] border-[#e1e8f0] rounded-md dark:border-[#40454f] px-3 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-[#282a33] dark:hover:bg-slate-700"

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
    <div className="p-8 w-full h-screen flex justify-center dark:bg-[#1a202b] dark:text-white">
      <div className="flex flex-col gap-10 justify-start items-start mx-[50px] max-w-[1200px] h-[500px]">
        <Link
          className={`${cssButton}`}
          to={"/"}
        >
          BACK
        </Link>
        {country.map((info, i) => (
          <div className="flex gap-40 flex-col md:flex-row" key={i}>
            <img
              className="h-[350px] rounded-md"
              src={info.flags.svg}
              alt={info.name.common}
            />
            <div className="flex flex-col gap-4 items-center justify-center">
              <h1 className="font-bold text-4xl lg:text-6xl">
                {info.name.common}
              </h1>
              <h2 className="font-bold text-2xl lg:text-3xl">
                {info.name.official}
              </h2>

              <div className="flex gap-20">
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

                <div>
                  {info.borders && (
                    <>
                      <h3>Borders:</h3>
                      <ul className="grid grid-cols-2 gap-2 mt-2">
                        {info.borders.map((border, i) => (
                          <li className={`${cssButton} flex justify-center items-center`} key={i}><Link to={`/${info.name.common}`}>{border}</Link></li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCountry;
