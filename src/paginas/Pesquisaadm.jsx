import React, { useState } from 'react';
import './Pesquisaadm.css';
import { Link } from 'react-router-dom';
import Logo from '../jp-logo.png';

export default function Pesquisaadm() {
  const [showRating, setShowRating] = useState(false);

  const handleStartButtonClick = () => {
    setShowRating(true);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <div className="title">Pesquisa de satisfação</div>
          <div className="description">
            Abaixo você irá começar sua pesquisa de satisfação. São apenas 3 perguntas rápidas.
          </div>
        </div>
        <button id="btnChangeContent" onClick={handleStartButtonClick}>
          Iniciar
        </button>
        {showRating && (
          <div id="ratingContainer" className="hidden">
            <div className="star-widget">
              <input type="radio" name="rate" id="rate-5" />
              <label htmlFor="rate-5" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-4" />
              <label htmlFor="rate-4" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-3" />
              <label htmlFor="rate-3" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-2" />
              <label htmlFor="rate-2" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-1" />
              <label htmlFor="rate-1" className="fas fa-star"></label>
              <form action="#">
                <header></header>
                <div className="textarea">
                  <textarea cols="30" placeholder="Fale um pouco sobre sua experiência..."></textarea>
                </div>
              </form>
            </div>
            <span id="rating-value"></span>
          </div>
        )}
      </div>
    </div>
  );
}
