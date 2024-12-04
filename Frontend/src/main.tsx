import React from "react";
import {createRoot}from "react-dom/client";
import App from "./App";
import "./index.css";
 
import { ThemeProvider } from "@material-tailwind/react";
 
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}