/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const InfoCountry = () => {
  const [country, setCountry] = useState([])
  const { name } = useParams();

  const fetchCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const dataCountry = await response.json();
      setCountry(dataCountry);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, [name]);

  console.log(country);

  return <div>{name}</div>;
};

export default InfoCountry;
