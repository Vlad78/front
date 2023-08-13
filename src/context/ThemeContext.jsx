"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  console.log("🚀 ~ file: ThemeContext.js:9 ~ ThemeProvider ~ themeMode:", themeMode);

  const toggle = () => {
    if (themeMode !== undefined) {
      setThemeMode((prev) => (prev === "dark" ? setThemeMode("light") : setThemeMode("dark")));
    } else {
      setThemeMode("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggle }}>
      <div className={`theme ${themeMode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
