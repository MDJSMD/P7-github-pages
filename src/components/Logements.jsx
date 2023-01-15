//Importation des modules React et de l'Hook useState pour gérer l'état de l'application
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListeLogements from "../data/logements.json";
import Card from './Card';

function Logements() {
  const [logements, setLogements] = useState(ListeLogements); //utilisation de useState hook pour initialiser l'état avec les données du fichier json


  return (
    <div className="liste-logements">
      {logements.map((logement) => (
        <Link key={logement.id} to={`/Logement/${logement.id}`}> 
          <Card
            key={logement.id}
            id={logement.id}
            image={logement.cover}
            titre={logement.title}
          />
        </Link>
      ))}
    </div>
  );
}

export default Logements;
