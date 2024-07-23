import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlagsList from "./components/FlagsList";
import ThemeBar from "./components/ThemeBar"
import InfoCountry from "./components/InfoCountry";

const App = () => {
  return (
    <BrowserRouter>
    <ThemeBar/>
      <Routes>
        <Route path="/" element={<FlagsList />} />
        <Route path="/:name" element={<InfoCountry/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
