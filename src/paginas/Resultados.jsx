import './Resultados.css'
import { Link } from 'react-router-dom';
import Logo from '../jp-logo.png';
export default function Resultados(){
    return(
        <div className="container">
        <div className="header">
            <img src={Logo} alt="Logo Empresa"/>
            <div className="botao">
                <Link href="/criacao" className="links" id="perguntas">Criação de Perguntas</Link>
                <Link href="/resultados" className="links" id="resultados">Resultados das Pesquisas</Link>
                <a href="https://api.whatsapp.com/send?phone=5585991226011&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20suporte%20da%20JPtechnologies" className="links" id="suporte" target="_blank">Suporte</a>
                <Link href="/principaladm" className="links" id="acesso">Principal</Link>
                <Link href="/login" className="links" id="sair"><button>Sair</button></Link>
            </div>
        </div>
        <div className="corpo">
            <div className="contador-container">
                <div className="contador-item">
                    <h3>Péssimo</h3>
                    <span id="contadorPessimo"></span>
                </div>
                <div className="contador-item">
                    <h3>Ruim</h3>
                    <span id="contadorRuim"></span>
                </div>
                <div className="contador-item">
                    <h3>Bom</h3>
                    <span id="contadorBom"></span>
                </div>
                <div className="contador-item">
                    <h3>Muito Bom</h3>
                    <span id="contadorMuitoBom"></span>
                </div>
                <div className="contador-item">
                    <h3>Excelente</h3>
                    <span id="contadorExcelente"></span>
                </div>
            </div>
            <div className="grafico-container">
                <canvas id="pesquisaGrafico"></canvas>
            </div>
        </div>
        <div className="corpo2">
            <h2 id="usuarioNome"></h2>
            <p id="usuarioTexto"></p>
            <h3>Média das perguntas:</h3>
            <ul id="mediaPerguntas"></ul>
        </div>
    </div>
    )
}