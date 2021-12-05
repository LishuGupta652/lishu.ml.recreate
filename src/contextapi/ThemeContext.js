import React, { createContext, useState } from "react";

export const Theme = createContext();

export const ThemeContext = (props) => {
  const userTheme = sessionStorage.getItem("theme");
  const [theme, setUserTheme] = useState(userTheme || "light");

  const setTheme = () => {
    const pref = theme === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", pref);
    setUserTheme(pref);
  };
  return (
    <Theme.Provider value={[theme, setTheme]}>{props.children}</Theme.Provider>
  );
};

export default ThemeContext;
