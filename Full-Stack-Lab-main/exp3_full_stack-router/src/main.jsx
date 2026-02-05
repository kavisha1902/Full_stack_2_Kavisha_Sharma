import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

console.log("main.jsx: Starting app render");
try {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
  console.log("main.jsx: App rendered successfully");
} catch (error) {
  console.error("main.jsx: Error rendering app:", error);
}
