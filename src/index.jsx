import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//import "./styles/index.css";

//Création du DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( //Rendu du DOM au sein de mon application
  <React.StrictMode>
    <App />
  </React.StrictMode>
);