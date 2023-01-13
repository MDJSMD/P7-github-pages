import React, { useEffect } from "react"; // Importation de React pour utiliser les composants React
import { useLocation } from "react-router-dom"; // Importation de useLocation pour avoir les informations de l'emplacement du visiteur
import { Link } from "react-router-dom"; // Importation de Link pour permettre une navigation vers la page d'acceuil
import Header from "../components/Header"; // Importation du composant Header depuis le dossier components

const Error = () => {
  let location = useLocation(); // Utilisation de location pour avoir les informations de l'emplacement du visiteur

  useEffect(() => { 
    // Utilisation de useEffect pour envoyer un message console d'erreur
    console.log("La page que vous recherchez n'existe pas", location.pathname);
  }, [location]);

  return (
    <div className="Error404Page">
      <Header />
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>  

      {/* Lien pour retourner à la page d'accueil */}
      <div className="link">  
      <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
};

export default Error;


