import React, { useState } from 'react';
import './Recuperar.css';
import { Link } from 'react-router-dom';

export default function Recuperar() {
  const [username, setUsername] = useState('');

  const handleConfirmClick = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/recuperar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();

      if (data.error) {
        console.error('Erro:', data.error);
        alert('Erro ao recuperar a senha. Por favor, tente novamente.');
      } else {
        alert('Uma nova senha foi enviada para o seu email.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao recuperar a senha. Por favor, tente novamente.');
    }
  };

  return (
    <div className="container">
      <h1>Recuperação de senha</h1>
      <input
        type="text"
        id="username"
        placeholder="Nome de Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button>
        <Link to="/senha" onClick={handleConfirmClick}>
          Confirmar
        </Link>
      </button>
    </div>
  );
}
