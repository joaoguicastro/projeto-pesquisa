import React, { useState, useEffect } from 'react';
import './Criacao.css';
import Logo from '../jp-logo.png';
import { Link } from 'react-router-dom';

export default function Criacao() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
    setQuestions(storedQuestions);
  }, []);

  const addQuestionToList = (title, description, index) => (
    <div key={index} className="question">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => removeQuestion(index)}>Remover</button>
    </div>
  );

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const questionTitle = e.target.questionTitle.value;
    const questionDescription = e.target.questionDescription.value;

    const newQuestion = {
      title: questionTitle,
      description: questionDescription,
    };

    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));

    e.target.reset();
  };

  return (
    <div className="container">
      <div className="header">
        <img src={Logo} alt="Logo Empresa" />
        <div className="botao">
          <Link to="/criacao" className="links" id="perguntas">
            Criação de Perguntas
          </Link>
          <Link to="/resultados" className="links" id="pesquisa">
            Resultados das Pesquisas
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=5585991226011&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20suporte%20da%20JPtechnologies"
            className="links"
            id="suporte"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suporte
          </a>
          <Link to="/principaladm" className="links" id="acesso">
            Principal
          </Link>
          <Link to="/login">
            <button>Sair</button>
          </Link>
        </div>
      </div>
      <div className="botao2">
        <div id="questionContainer">
          <form id="newQuestionForm" onSubmit={handleSubmit}>
            <h2>Adicionar nova pergunta</h2>

            <div className="titulo">
              <label htmlFor="questionTitle">Título da pergunta:</label><br />
              <input type="text" id="questionTitle" name="questionTitle" /><br />
            </div>

            <div className="descricao">
              <label htmlFor="questionDescription">Descrição da pergunta:</label><br />
              <textarea id="questionDescription" name="questionDescription" />
              <br />
            </div>

            <input type="submit" id="submit" value="Adicionar pergunta" />
          </form>
        </div>
        <div id="questionList">
          {questions.map((question, index) => (
            addQuestionToList(question.title, question.description, index)
          ))}
        </div>
      </div>
    </div>
  );
}
