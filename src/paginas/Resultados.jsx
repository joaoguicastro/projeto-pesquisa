import React, { useEffect } from 'react';
import './Resultados.css';
import { Link } from 'react-router-dom';
import Logo from '../jp-logo.png';
import Chart from 'chart.js/auto';

export default function Resultados() {
    useEffect(() => {
        const responses = JSON.parse(localStorage.getItem('responses')) || [];

        let pessimoCount = 0;
        let ruimCount = 0;
        let bomCount = 0;
        let muitoBomCount = 0;
        let excelenteCount = 0;

        responses.forEach((response) => {
            switch (response.rating) {
                case 'pessimo':
                    pessimoCount++;
                    break;
                case 'ruim':
                    ruimCount++;
                    break;
                case 'bom':
                    bomCount++;
                    break;
                case 'muito_bom':
                    muitoBomCount++;
                    break;
                case 'excelente':
                    excelenteCount++;
                    break;
                default:
                    break;
            }
        });

        document.getElementById('contadorPessimo').textContent = pessimoCount;
        document.getElementById('contadorRuim').textContent = ruimCount;
        document.getElementById('contadorBom').textContent = bomCount;
        document.getElementById('contadorMuitoBom').textContent = muitoBomCount;
        document.getElementById('contadorExcelente').textContent = excelenteCount;

        const feedbackChart = new Chart(document.getElementById('pesquisaGrafico'), {
            type: 'doughnut',
            data: {
                labels: ['Péssimo', 'Ruim', 'Bom', 'Muito Bom', 'Excelente'],
                datasets: [{
                    data: [pessimoCount, ruimCount, bomCount, muitoBomCount, excelenteCount],
                    backgroundColor: ['#FF0000', '#FFC107', '#4CAF50', '#03A9F4', '#9C27B0'],
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontColor: '#000',
                    },
                },
            },
        });
    }, []);

    return (
        <div className="container">
            <div className="header">
                <img src={Logo} alt="Logo Empresa" />
                <div className="botao">
                    <Link to="/criacao" className="links" id="perguntas">Criação de Perguntas</Link>
                    <Link to="/resultados" className="links" id="resultados">Resultados das Pesquisas</Link>
                    <a href="https://api.whatsapp.com/send?phone=5585991226011&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20o%20suporte%20da%20JPtechnologies" className="links" id="suporte" target="_blank" rel="noopener noreferrer">Suporte</a>
                    <Link to="/principaladm" className="links" id="acesso">Principal</Link>
                    <Link to="/login" className="links" id="sair"><button>Sair</button></Link>
                </div>
            </div>
            <div className="corpo">
                <div className="contador-container">
                    <div className="contador-item">
                        <span className="contador-label">Péssimo - Contagem:</span>
                        <span id="contadorPessimo"></span>
                    </div>
                </div>
                <div className="grafico-container">
                    <canvas id="pesquisaGrafico"></canvas>
                </div>
            </div>
            <div className="corpo2">
                <h2 id="usuarioNome">Nome do Usuário</h2>
                <p id="usuarioTexto">Texto do Usuário</p>
                <h3>Média das perguntas:</h3>
                <ul id="mediaPerguntas"></ul>
            </div>
        </div>
    );
}
