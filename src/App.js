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
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import Dwarf from "./pages/Dwarf";
import About from "./pages/About";
import { GlobalStyles, lightTheme, darkTheme } from "./theme/global.styled";
import ProjectQueryPage from "./pages/ProjectQueryPage";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

function App() {
  const [theme, setTheme] = useContext(Theme);

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
        <motion.div
          animate={{ x: "-150%" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="animated-overlay"
        />
        <StyledApp>
          <GlobalStyles />
          <div className="app">
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/projects" exact element={<Project />} />
                <Route path="/blog" exact element={<Project />} />
                <Route
                  path="/project/:project"
                  exact
                  element={<ProjectQueryPage />}
                />
                <Route path="/about" exact element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </StyledApp>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
