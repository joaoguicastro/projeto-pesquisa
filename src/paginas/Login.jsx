import './Login.css'
import Logo from '../jp-logo.png'
export default function Login(){
    return(
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
                            <input type="usuario" id="user" name="username" required />
                            <label for="">Usuário</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="bag-outline"></ion-icon>
                            <input type="password" id="password" name="password" required />
                            <label for="">Senha</label>
                        </div>
                        <div className="todo">
                            <div className="lembre">
                                <label for=""><input type="checkbox" />Lembre-se de mim</label>
                            </div>
                            <div className="login">
                                <button id="login-btn">Login</button>
                            </div>
                            <div className="esqueci">
                                <label for=""><a href="../esqueci/recuperar.html">Esqueci minha senha</a></label>
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