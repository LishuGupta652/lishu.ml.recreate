import "./css/app.css";

// components
import Home from "./pages/Home";
import Project from "./pages/Project";
import styled, { ThemeProvider } from "styled-components";
// BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Framer Motion
import { motion } from "framer-motion";
// Context api
import { Theme } from "./contextapi/ThemeContext";
import { useContext } from "react";

const lightTheme = {
  header: {
    nav: {
      background: "#fafafa",
      color: "#121212",
    },
  },
  colors: {
    background: "#fafafa",
    color: "#212121",
    green: "#2ecc71",
    greenTrans: "rgba(46, 204, 112, 0.1)",
  },
  mobile: "786px",
};

const darkTheme = {
  header: {
    nav: {
      color: "#fafafa",
      background: "#212121",
    },
  },
  colors: {
    color: "#fafafa",
    background: "#212121",
    green: "#2ecc71",
    greenTrans: "rgba(46, 204, 112, 0.4)",
  },
  mobile: "786px",
};

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

function App() {
  const [theme, setTheme] = useContext(Theme);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <motion.div
          animate={{ x: "-150%" }}
          transition={{ delay: 0.3, duration: 1 }}
          className="animated-overlay"
        />
        <StyledApp>
          <div className="app">
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/project" exact element={<Project />} />
              </Routes>
            </BrowserRouter>
          </div>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
