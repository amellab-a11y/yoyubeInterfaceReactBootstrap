import React from 'react';
import iconeHome from '../img/icon-home.png';
import iconeExpl from '../img/icon-explorer.jpg';
import iconeAbonn from '../img/icon-abonnement.jpg';
import iconeBiblio from '../img/icon-bibliotheque.jpg';
import iconeHistorique from '../img/icon-historique.jpg';
import iconeVideo from '../img/icon-video.jpg';
import iconeAregarder from '../img/icon-aregarder.jpg';
import iconeJaime from '../img/icon-jaime.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import { Card, Row, Col, Search, Button, Container, FormLabel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaHome,FaAlignJustify,FaSearch,FaVideo,FaGripHorizontal,FaRegBell} from "react-icons/fa";
const LeftPart = () => {
return (
<>
<div className="mainBody">
<div className="sidebar">
        <div className="sidebar__categories">
          <div className="sidebar__category">
            <img src={iconeHome}/><a href="#">
            <span>Accueil</span>
              </a>
          </div>
          <div className="sidebar__category">
          <img src={iconeExpl}/><a href="#">
            <span>Explorer</span>
              </a>
          </div>
          <div className="sidebar__category">
          <img src={iconeAbonn}/><a href="#">
            <span>Abonnements</span>
              </a>
          </div>
        </div>
        <hr />
        <div className="sidebar__categories">
          <div className="sidebar__category">
          <img src={iconeBiblio}/><a href="#">
            <span>Bibliothèque</span>
              </a>
          </div>
          <div className="sidebar__category">
          <img src={iconeHistorique}/><a href="#">
            <span>Historique</span>
              </a>
          </div>
          <div className="sidebar__category">
           <img src={iconeVideo}/><a href="#">
            <span>Vos Videos</span>
              </a>
          </div>
          <div className="sidebar__category">
          <img src={iconeAregarder}/><a href="#">
            <span>A regareder plus tard</span>
              </a>
          </div>
          <div className="sidebar__category">
          <img src={iconeJaime}/><a href="#">
            <span>Vidéos "j'aime"</span>
              </a>
          </div>
        </div>
        <hr />
      </div>


</div>

</>


);

};
export default LeftPart;