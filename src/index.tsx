import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // i wrapped the app comp in BrowserRouter, so the react-router can work
  <HashRouter>
    <App />
  </HashRouter>
);
