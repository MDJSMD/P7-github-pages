//Importation des modules 
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error404";
import Logements from "./pages/Logements";
import "./styles/index.css";

//Définition du chemin de mes routes
const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logements />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  //Exportation de mon application
  export default App;