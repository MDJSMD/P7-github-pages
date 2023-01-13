//Importation des modules react
import React, { useState } from 'react';
import chevron from "../assets/chevron-bas.png"

//Création d'une fonction pour afficher un titre et afficher ou masquer une description 
const Collapse = ({title, description}) => {
    const [open, setOpen] = useState(false); //Utilisation de useState pour connaitre l'état de l'apllication
    return (
        <div className="collapse-box" >
            <div className="collapse-head">
                <div className="collapse-title">{title}</div>
                <div className={`collapse-arrow ${open}`} onClick={() => setOpen(!open)}>
                    <img src={chevron} alt="Ouvrir la liste" />
                </div>
            </div>
            {
                open && <div className="collapse-description">{description}</div>
            }
        </div>
    );
};

export default Collapse;