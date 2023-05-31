
import '../../../public/Styles/Main.css'
import { useContext, useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import casa from '../../../public/assets/casa.jpg'
import bg from '../../../public/assets/bg.jpg'

import ContextApi from '../../Contexts/ContextApi'
import WppFloat from './WppFloat'





export default function  Main(){

    
    const {dados,Item,setItem} = useContext(ContextApi)
 
    
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/produtos')
        .then((item)=>{
        
            return item.json()
        }).then((data)=>{
             setItem(data) 
        })
    },[])
    
    const Filter = (e) => {
        const nomeDaId = e.target.id;
        const valor = e.target.value

      
        fetch('http://127.0.0.1:5000/produtos')
        .then(response => {
       
        return response.json();
        })
        .then(items => {
        const itemsFiltrados = items.filter(item => item[nomeDaId] >= valor);
        
        setItem(itemsFiltrados)
        })

    };

    return(
        <>
           
                
            <img src={bg} className='bg' alt="" />
          <main className='main'>
            <section >
                <div  className="FilterBtn" onClick={()=>{
                    const nav = document.querySelector('.Filter')

                    nav.classList.toggle('activity')
                }}>
                    Filtro
                </div>
            <nav className='Filter'>
                <select name="" id="quartos" onChange={Filter}>
                    <option value="0">Quartos</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    
                </select>

                <select name="" id="banheiros" onChange={Filter}>
                    <option value="0">Banheiros</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                </select>

                <select name="" id="garagens" onChange={Filter}>
                    <option value="0">Garagem</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>

                <select name="" id="tamanho" onChange={Filter}>
                    <option value="0">Metros M²</option>
                    <option value="10">10M²</option>
                    <option value="20">20M²</option>
                    <option value="30">30M²</option>
                    <option value="40">40M²</option>
                    <option value="50">50M²</option>
                    <option value="60">60M²</option>
                    <option value="70">70M²</option>
                    <option value="80">80M²</option>
                    <option value="100">100M²</option>
                </select>

                <select name="" id="valor" onChange={Filter}>
                    <option value="0">Preço</option>
                    <option value="5000">5.000R$</option>
                    <option value="10000">10.000R$</option>
                    <option value="20000">20.000R$</option>
                    <option value="30000">30.000R$</option>
                    <option value="60000">60.000R$</option>
                    <option value="90000">90.000R$</option>
                    <option value="200000">200.000R$</option>
                    <option value="500000">500.000R$</option>
                    <option value="1000000">1.000.000R$</option>
                    <option value="2000000">2.000.000R$</option>
                    <option value="5000000">5.000.000R$</option>
                </select>
            </nav>

            </section>


           <div className="cards">
           {Item.map((data, i) => (
                
            
                <div>
                    <h1 style={{color:'#222'}}>{data.local}</h1>
                     <Link to={`/anuncio/${data.id}`} className="card" key={i}>
                    <input type="number" defaultValue={data.id} style={{ display: 'none' }} />
                    <img src={data.img} alt="" />
                    <br />
                    <div className="nome" style={{textTransform:'capitalize'}}>{data.nome}</div>
                    <div className="desc" style={{flexDirection:'row'}}>
                    <div className="quartos"><i className="fa-sharp fa-solid fa-bed"></i> <span>{data.quartos}</span></div>
                    <div className="banheiro"><i className="fa-solid fa-bath"></i> <span>{data.banheiros}</span></div>
                    <div className="garagem"><i className="fa-solid fa-car"></i> <span>{data.garagens}</span></div>
                    <div className="metros"><div className="ico"> <span>{data.tamanho}M²</span></div></div>
                    </div>
                    <div className="preco"><span>R$ <span>{data.valor}</span></span>
                     <div className="estado" style={{textTransform:"capitalize"}}>{data.estado}</div></div>
                </Link>
                </div>
              
                ))}
           </div>
            <WppFloat />



          </main>

        </>
    )
}