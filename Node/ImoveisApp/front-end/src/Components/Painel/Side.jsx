import '../../../public/Styles/Painel/SideBar.css'
import {Link} from 'react-router-dom'
import avatar from '../../../public/assets/ico.png'

export default function Side(){
    return(
        <div className="sidebar">
            <img src={avatar} alt="" />
          

            <div className="functions">
            <Link to={'/'} target='_blank'>Abrir o Site</Link>
            <Link to='/painel/cadastrar'>Cadastra</Link>
            <Link to="/painel/remover">Remover</Link>
            <Link to="/painel/editar">Editar</Link>
            <Link to="/painel/administrador">Administrador</Link>
            <Link to="/painel/emails">Emails Cadastrados</Link>
            <Link to="/painel/depoimentos">Depoimentos</Link>
            <Link to="/painel/removedep">Remover Depoimentos</Link>
            </div>
        </div> 
    )
}

