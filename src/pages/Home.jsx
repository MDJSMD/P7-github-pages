import React from "react"; //Importation des composant react
import Header from "../components/Header";
import Banner from "../components/Banner";
import BannerIMG from "../assets/BG-HOME.png";
import Footer from "../components/Footer";
import Logements from "../components/Logements";


export default function Home() {
    return (
        <div className="container">
            <Header />
            <Banner image={BannerIMG} texte="Chez vous, partout et ailleurs"/>
            
            <div>
                <Logements />
            </div>
            <Footer />
        </div>
      )   
};