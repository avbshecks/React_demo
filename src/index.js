import ReactDOM from "react-dom/client";

import App from "./App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
