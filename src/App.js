import "./css/app.css";

// components
import Home from "./pages/Home";
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
    color: "#121212",
    green: "#2ecc71",
  },
  mobile: "786px",
};

const darkTheme = {
  header: {
    nav: {
      color: "#fafafa",
      background: "#121212",
    },
  },
  colors: {
    color: "#fafafa",
    background: "#121212",
    green: "#2ecc71",
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
              </Routes>
            </BrowserRouter>
          </div>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
