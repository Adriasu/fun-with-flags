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

  return <div>
  {country.map((info, i) => (
    <div key={i}>

      <img src={info.flags.svg} alt={info.name.common} />


    </div>







  ))}



    
    
    
    
    
    
    
    
    
    </div>;
};

export default InfoCountry;
