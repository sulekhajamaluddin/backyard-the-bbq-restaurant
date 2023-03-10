//Node Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Project Files
import App from "./App";
import { CategoriesProvider } from "./state/CategoriesProvider";
import { ProductsProvider } from "./state/ProductsProvider";
import "./scripts/fontawesome/fontawesomeSetUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
