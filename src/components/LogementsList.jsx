import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ListeLogements from "../data/logements.json";
import Carrousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Tag from '../components/Tag';
import red from '../assets/star_rate-red.png';
import grey from '../assets/star_rate-grey.png';


function LogementFiche() {
  const { id } = useParams();
  const logement = ListeLogements.find(unit => unit.id === id);

  if (!logement) {
    return <Navigate to="/Error404" />;
  }

  const tags = logement.tags.map((tag, index) => (
    <Tag key={index} tagData={tag} />
  ));

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <img key={i} className="star" src={i < parseInt(logement.rating) ? red : grey} />
    );
  }

  const equipements = logement.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <>
      <Carrousel images={logement.pictures} />
      <div className="apartments-box">
        <div className="apartments-info">
          <span className="apartments-title">{logement.title}</span>
          <span className="apartments-location">{logement.location}</span>
        <div className="tags">{tags}</div>
        </div>
      <div className="host-rating">
        <div className="host-infos">
          <span className="host-name">{logement.host.name}</span>
          <img className="host-picture" src={logement.host.picture} alt="Host" />
        </div>
        <div className="rating">{stars}</div>
      </div>
      </div>
    <div className="more-info-apartments">
    <Collapse title="Description" description={logement.description} />
    <Collapse title="Equipements" description={equipements} />
    </div>
  </>
);
}

export default LogementFiche;
