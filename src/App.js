import "./css/app.css";

// components
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
// BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";

const lightTheme = {
  header: {
    nav: {
      background: "#fafafa",
      color: "#121212",
    },
  },
};

function App() {
  return (
    <>
      <div className="app">
        <ThemeProvider theme={lightTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
