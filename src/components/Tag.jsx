//Importation des modules React
import React from 'react';

const Tag = ({tagData}) => {
    return (
       <div className="tag">{tagData}</div> //Affichage du contenu du tag
    );
};

export default Tag;