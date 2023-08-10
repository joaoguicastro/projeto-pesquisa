import React, { useState } from 'react';
import './Senha.css';
import { Link } from 'react-router-dom';

export default function Senha() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <h1>Confirme sua senha</h1>

      <input
        type={showPassword ? 'text' : 'password'}
        id="minhasenha1"
        placeholder="Nova Senha"
        required
      />

      <input
        type={showPassword ? 'text' : 'password'}
        id="minhasenha2"
        placeholder="Confirme a Senha"
        required
      />

      <div className="mostrar">
        <label htmlFor="">
          <input type="checkbox" onClick={toggleShowPassword} />
          Mostrar senha
        </label>
      </div>

      <Link to="/login">
        <button>Confirmar</button>
      </Link>
    </div>
  );
}
