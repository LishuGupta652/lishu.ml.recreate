import React, { createContext } from "react";

export const Theme = createContext();

export const ThemeContext = (props) => {
  return <Theme.Provider value="light">{props.children}</Theme.Provider>;
};

export default ThemeContext;
