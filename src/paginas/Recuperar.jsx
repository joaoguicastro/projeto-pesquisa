import './Recuperar.css'
import { Link } from 'react-router-dom';
export default function Recuperar(){
    return(
        <div className="container">
            <h1>Recuperação de senha</h1>
            <input type="text" placeholder="Cidade"/>

            <input type="text" placeholder="Nome Completo"/>

            <input type="text" placeholder="CPF"/>
            
            <input type="date" placeholder="Data de nascimento"/>
    
            <button ><Link href="/senha">Confirmar</Link></button>
        </div>
    )
}