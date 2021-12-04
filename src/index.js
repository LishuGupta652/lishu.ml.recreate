import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Context api
import { ThemeContext } from "./contextapi/ThemeContext";

ReactDOM.render(
  <ThemeContext>
    <App />
  </ThemeContext>,
  document.getElementById("root")
);

serviceWorker.register();
