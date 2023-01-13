//Importation des modules React et de l'Hook useState pour gérer l'état de l'application
import React, { useState } from 'react';
import ImageGauche from '../assets/fleche-gauche.png';
import ImageDroite from '../assets/fleche-droite.png';

//Création d'un carousel permettant d'afficher les images et de naviguer entre-elles
const Carrousel = ({ images }) => {

//Création d'un index pour les images pour connaitre la propriété active et mettre à jour l'index
const [indexImageCourant, setIndexImageCourant] = useState(0);
//Définition du nombres d'images
const nombreImages = images.length;

//Création d'une fonction pour revenir à l'image précédente
const gererClicPrecedent = () => {
if (indexImageCourant === 0) {
setIndexImageCourant(nombreImages - 1);
} else {
setIndexImageCourant(indexImageCourant - 1);
}
};

//Création d'une fonction pour passer à l'image suivante
const gererClicSuivant = () => {
if (indexImageCourant === nombreImages - 1) {
setIndexImageCourant(0);
} else {
setIndexImageCourant(indexImageCourant + 1);
}
};

return (
  <div className="carrousel">
  {nombreImages > 1 && ( //Dans le cas ou le carrousel contient plusieurs images
  <>
  <img
           className="arrow left-arrow"
           src={ImageGauche}
           alt="image précédente"
           onClick={gererClicPrecedent}
         />
  <img
           className="arrow right-arrow"
           src={ImageDroite}
           alt="image suivante"
           onClick={gererClicSuivant}
         />
  </>
  )}
  <div className='CompteurImages'>{`${indexImageCourant + 1}/${nombreImages}`}</div> 
  {images.map((image, index) => ( //Affichage des images
  <img
  key={index} //Utilisation de Key avec la valeur de l'index de l'image
  className={index === indexImageCourant ? 'carrousel-img actif' : 'carrousel-img'} //Utilisation d'une class pour vérifier si l'image est active ou non grace au indexImageCourant
  src={image}
  alt="Logement"
  />
  ))}
  </div>
  );
  

};
export default Carrousel;
