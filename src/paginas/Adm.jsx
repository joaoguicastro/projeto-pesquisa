import './Adm.css';
import { Link } from 'react-router-dom';
import Logo from '../jp-logo.png';
export default function Adm(){
    return(
        <div className="container">
            <div className="header">
                <img src={Logo} alt="Logo Empresa"/>
                <div className="botao">
                    <Link to="/criacao" className="links" id="perguntas">Criação de Perguntas</Link>
                    <Link to="/resultados" className="links" id="resultados">Resultados das Pesquisas</Link>
                    <a href="https://api.whatsapp.com/send?phone=5585991226011&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20suporte%20da%20JPtechnologies" className="links" id="suporte" target="_blank">Suporte</a>
                    <Link to="/principaladm" className="links" id="acesso">Principal</Link>
                    <Link to="/login"><button>Sair</button></Link>
                </div>
            </div>
        </div>
    );
}