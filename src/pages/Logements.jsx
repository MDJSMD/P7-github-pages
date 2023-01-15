//Importation des composant react
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogementFiche from "../components/LogementsList";

const Logement = () => {
    return (
        <div>
            <Header />
            <LogementFiche />
            <Footer />
        </div>
    )
};

export default Logement;