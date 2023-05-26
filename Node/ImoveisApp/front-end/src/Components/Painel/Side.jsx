import '../../../public/Styles/Painel/SideBar.css'
import {Link} from 'react-router-dom'
import avatar from '../../../public/assets/ico.png'

export default function Side(){
    return(
        <div className="sidebar">
            <img src={avatar} alt="" />

            <div className="functions">
            <Link to='/painel/cadastrar'>Cadastra</Link>
            <Link to="/painel/remover">Remover</Link>
            <Link to="/painel/editar">Editar</Link>
            <Link to="/painel/anuncios">Ver Anuncios</Link>
            </div>
        </div> 
    )
}

