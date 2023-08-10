"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const toggle = () => {
    console.log("check");
    setThemeMode((prev) => (prev === "light" ? setThemeMode("dark") : setThemeMode("light")));
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggle }}>
      <div className={`theme ${themeMode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
