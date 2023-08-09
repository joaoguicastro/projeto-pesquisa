import './App.css';
import Login from './paginas/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Principal from './paginas/Principal'
import Adm from './paginas/Adm'
import Principaladm from './paginas/Principaladm'
import Recuperar from './paginas/Recuperar'
import Senha from './paginas/Senha'
import Resultados from './paginas/Resultados'
import Criacao from './paginas/Criacao'
import Pesquisa from './paginas/Pesquisa'
import Pesquisaadm from './paginas/Pesquisaadm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='principal' element={<Principal/>}/>
        <Route path='adm' element={<Adm/>}/>
        <Route path='principaladm' element={<Principaladm/>}/>
        <Route path='recuperar' element={<Recuperar/>}/>
        <Route path='senha' element={<Senha/>}/>
        <Route path='resultados' element={<Resultados/>}/>
        <Route path='criacao' element={<Criacao/>}/>
        <Route path='pesquisa' element={<Pesquisa/>}/>
        <Route path='pesquisaadm' element={<Pesquisaadm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
