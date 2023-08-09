import { Link } from 'react-router-dom';
import './Criacao.css';
import Logo from '../jp-logo.png';

export default function Criacao() {
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
          <form id="newQuestionForm">
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
        <div id="questionList"></div>
      </div>
    </div>
  );
}

