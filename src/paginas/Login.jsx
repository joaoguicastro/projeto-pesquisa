import React from 'react';
import './Login.css';
import Logo from '../jp-logo.png';

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();

    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    const users = [
      {
        username: "adm",
        password: "adm123"
      },
      {
        username: "usuario",
        password: "12345"
      }
    ];

    const isAuthenticated = users.some(function(user) {
      return user.username === username && user.password === password;
    });

    if (isAuthenticated) {
      alert("Login bem-sucedido!");
      window.location.href = username === "adm" ? "/principaladm" : "/principal";
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  const handleShowPassword = (inputId) => {
    const input = document.getElementById(inputId);
    input.type = input.type === "password" ? "text" : "password";
  };

  return (
    <>
      <div className="imagem">
        <img src={Logo} alt="Imagem logo" />
      </div>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <h2>Login</h2>
              <div className="inputbox">
                <ion-icon name="person-outline"></ion-icon>
                <input type="text" id="user" name="username" required />
                <label htmlFor="user">Usuário</label>
              </div>
              <div className="inputbox">
                <ion-icon name="bag-outline"></ion-icon>
                <input type="password" id="password" name="password" required />
                <label htmlFor="password">Senha</label>
                <ion-icon
                  name="eye-outline"
                  className="show-password"
                  onClick={() => handleShowPassword('password')}
                ></ion-icon>
              </div>
              <div className="todo">
                <div className="lembre">
                  <label><input type="checkbox" />Lembre-se de mim</label>
                </div>
                <div className="login">
                  <button id="login-btn" onClick={handleLogin}>Login</button>
                </div>
                <div className="esqueci">
                  <label><a href="../esqueci/recuperar.html">Esqueci minha senha</a></label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ion-icon name="person-outline"></ion-icon>
      <ion-icon name="bag-outline"></ion-icon>
    </>
  );
}
