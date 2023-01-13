import React from 'react';
//Création d'une focntion pour afficher une bannière contenant du texte et une image
const Banner = ({image, texte}) => {
    return (
        <div className='banner'>
            <img className='banner-img' src={image} alt='Banniere' /> 
            <span className='banner-text'>{texte}</span>
        </div>      
    );
};
//Exportation de ma fonction Banner
export default Banner;