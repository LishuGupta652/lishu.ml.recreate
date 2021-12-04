import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Context api
import { ThemeContext } from "./contextapi/ThemeContext";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {},
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ThemeContext>
      <App />
    </ThemeContext>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.register();
