import React, { useState, useEffect, useCallback } from 'react';
import './Pesquisaadm.css';

export default function Pesquisaadm() {
  const [showRating, setShowRating] = useState(false);

  const loadQuestions = useCallback(() => {
    fetch('../acessoadm/criacao.json')
      .then(response => response.json())
      .then(data => {
      })
      .catch(error => console.error('Erro ao carregar perguntas:', error));
  }, []);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

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
          </div>
        )}
      </div>
    </div>
  );
}
