import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ico from '../../../public/assets/ico.png'
import { Link } from 'react-router-dom'
import '../../../public/Styles/Header.css'


export default function Header(){


    return(
        <header>
        <div>
        <img src={ico} alt="" />
        <Link to="/" >Pagina Inicial</Link>
        <Link to="/sobre" >Sobre Nós</Link>
        <Link to="/contato" >Fale Conosco</Link>
        </div>

        <nav className='menu'>
          <div></div>
          <div></div>
          <div></div>
        </nav>
        <input type="text" name=""  id="search" placeholder='Buscar' />
      </header>
    )
}