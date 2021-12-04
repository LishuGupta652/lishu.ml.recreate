import "./css/app.css";

// components
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";

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
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
