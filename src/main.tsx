import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import { GenreProvider } from "./contexts/genres";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GenreProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </GenreProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
