import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useRoute } from "react-router-dom";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
