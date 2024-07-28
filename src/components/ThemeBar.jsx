import { Moon, SunIcon } from "lucide-react";
import React, { useState, useEffect } from "react";

const ThemeBar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const sunIconChange = theme === "light" ? "hidden" : "block";
  const moonIconChange = theme === "dark" ? "hidden" : "block";

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="h-[64px] flex justify-between items-center px-[16px] bg-[#edf2f7] dark:bg-[#181a24] dark:text-white">
      <p>Where in the world?</p>
      <button
        onClick={handleChangeTheme}
        className="w-[48px] h-[40px] flex justify-center items-center hover:bg-slate-200 rounded dark:bg-[#282a33] dark:hover:bg-slate-700"
      >
        <Moon className={`fill-black ${moonIconChange} size-4 `} />
        <SunIcon className={`${sunIconChange} size-4`} />
      </button>
    </div>
  );
};

export default ThemeBar;