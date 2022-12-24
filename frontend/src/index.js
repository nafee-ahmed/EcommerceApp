import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { CategoryContextProvider } from "./contexts/CategoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <CategoryContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </CategoryContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
