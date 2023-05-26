import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import ico from '../../../public/assets/ico.png'
import { Link } from 'react-router-dom'
import '../../../public/Styles/Header.css'
import ContextApi from '../../Contexts/ContextApi'




export default function Header(){


  const {dados,setDados,Item,setItem} = useContext(ContextApi)
 
  const Busca = async (e) => {
    const valor = e.target.value;
    setDados(valor);
   
    const itemsFiltrados = Item.filter(item => item['nome'].startsWith(dados));
    setItem(itemsFiltrados);

    const NewFetch = (await fetch('http://127.0.0.1:5000/produtos')).json()
    const Resolve = await NewFetch
    const Filter = Resolve.filter(item=>item['nome'].includes(dados))
    setItem(Filter)

    if(valor == 0){
        const fetch = await NewFetch
  
        setItem(fetch)
    }
   
  };

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
        <input type="search" name=""  id="search" placeholder='Buscar' value={dados} onChange={Busca}/>
      </header>
    )
}