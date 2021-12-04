import React, { createContext, useState } from "react";

export const Theme = createContext();

export const ThemeContext = (props) => {
  const [theme, setTheme] = useState("dark");
  return (
    <Theme.Provider value={[theme, setTheme]}>{props.children}</Theme.Provider>
  );
};

export default ThemeContext;
