import React, { useState, useEffect } from 'react';
import './Pesquisa.css';

export default function Pesquisa() {
  const [showRating, setShowRating] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [rateValue, setRateValue] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const response = await fetch('../acessoadm/criacao.json');
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Erro ao carregar perguntas:', error);
    }
  };

  const handleStartButtonClick = () => {
    setShowRating(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setRateValue(0);
      setFeedback('');
    } else {
      setShowRating(false);
      // Se necessário, adicione código para finalizar a pesquisa ou redirecionar
    }
  };

  const handleSubmitSurvey = async () => {
    // Submissão da pesquisa utilizando o estado atual das respostas
    const survey = {
      name: "Usuario 1",
      satisfaction: rateValue,
      comments: feedback,
      userId: 1
    };

    console.log('Submitting survey:', survey);

    try {
      const response = await fetch('http://localhost:3000/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(survey)
      });
      const data = await response.json();
      console.log('Sucesso:', data);
    } catch (error) {
      console.error('Erro:', error);
    }
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
        <button id="btnSubmit" onClick={handleStartButtonClick}>
          Iniciar
        </button>
        {showRating && (
          <div id="ratingContainer">
            <div className="star-widget">
            </div>
            <form id="feedbackForm" onSubmit={(e) => e.preventDefault()}>
              <header></header>
              <div className="textarea">
                <textarea
                  id="userFeedback"
                  cols="30"
                  placeholder="Fale um pouco sobre sua experiência..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
              </div>
            </form>
            <span id="rating-value">{rateValue}</span>
            <button onClick={handleNextQuestion}>Próxima</button>
            <button onClick={handleSubmitSurvey}>Enviar</button>
          </div>
        )}
      </div>
    </div>
  );
}
