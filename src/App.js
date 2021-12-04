import "./css/app.css";

// components
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
// BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";

const theme = {
  light: {
    color: "#121212",
    background: "#fafafa",
  },
  dark: {
    color: "#fafafa",
    background: "#121212",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
