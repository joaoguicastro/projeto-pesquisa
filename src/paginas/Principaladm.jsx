import './Principaladm.css';
import { Link } from 'react-router-dom';
import Logo from '../jp-logo.png';
export default function Principaladm(){
    return(
        <div className="container">
            <div className="header">
                <img src={Logo} alt="Logo Empresa"/>
                <div className="botao">
                    <a href="https://jptechnologies.com.br/index.php/empresa/" className="links" id="sobre" target="_blank">Quem somos</a>
                    <a href="https://jptechnologies.com.br/index.php/contato/" className="links" id="contato" target="_blank">Contato</a>
                    <Link to="/pesquisa" className="links" id="pesquisa">Pesquisa de satisfação</Link>
                    <Link to="/adm" className="links" id="adm">Administrador</Link>
                    <Link to="/login" className="links" id="sair"><button>Sair</button></Link>
                </div>
            </div>
        </div>
    );
}