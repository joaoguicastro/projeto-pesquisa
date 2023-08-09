import './Senha.css'
import { Link } from 'react-router-dom';
export default function Senha(){
    return(
        <div className="container">
            <h1>Confirme sua senha</h1>  
    
            <input type="password" id="minhasenha1" placeholder="Nova Senha" required/>

            <input type="password" id="minhasenha2" placeholder="Confirme a Senha" required/>
    
            <div className="mostrar">
                <label for=""><input type="checkbox" onclick={mostrar1 && mostrar2}/>Mostrar senha</label>
            </div>

            <Link to="/login"><button>Confirmar</button></Link>

        </div>
    )
}
function mostrar1(){
    var minhasenha1 = document.getElementById('minhasenha1')
    if (minhasenha1.type=='password'){
        minhasenha1.type='text';
    }
    else{
        minhasenha1.type='password'
    }
}

function mostrar2(){
    var minhasenha2 = document.getElementById('minhasenha2')
    if (minhasenha2.type=='password'){
        minhasenha2.type='text';
    }
    else {
        minhasenha2.type='password'
    }
}