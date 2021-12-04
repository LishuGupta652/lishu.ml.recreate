import "./css/app.css";

// components
import Home from "./pages/Home";
import styled, { ThemeProvider } from "styled-components";
// BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  },
  mobile: "786px",
};

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <StyledApp>
          <div className="app">
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<Home />} />
              </Routes>
            </BrowserRouter>
          </div>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
