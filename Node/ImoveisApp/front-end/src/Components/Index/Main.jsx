
import '../../../public/Styles/Main.css'
import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import casa from '../../../public/assets/casa.jpg'
import bg from '../../../public/assets/bg.jpg'



export default function  Main(){

    const  [Item,setItem] = useState([])
 
    
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/produtos')
        .then((item)=>{
            console.log(item)
            return item.json()
        }).then((data)=>{
             setItem(data) 
        })
    },[])
   

   

    return(
        <>
            <img src={bg} className='bg' alt="" />
          <main className='main'>
            <section>
            <nav>
                <select name="" id="">
                    <option value="transacao">Transação</option>
                </select>

                <select name="" id="">
                    <option value="tipo">Tipo</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="casacondominio">Casa Condominio</option>
                </select>

                <select name="" id="">
                    <option value="transacao">Cidade</option>
                </select>

                <select name="" id="">
                    <option value="transacao">Quartos</option>
                </select>

                <select name="" id="">
                    <option value="transacao">Preço</option>
                </select>
            </nav>

            </section>


           <div className="cards">
           {Item.map((data, i) => (
                <a href="/" className="card" key={i}>
                   
                    <div className="nome">{data.nome}</div>
                    <img src={data.img} alt="" />
                    <div className="desc">
                    <div className="quartos"><i className="fa-sharp fa-solid fa-bed"></i> <span>{data.quartos}</span></div>
                    <div className="banheiro"><i className="fa-solid fa-bath"></i> <span>{data.banheiros}</span></div>
                    <div className="garagem"><i className="fa-solid fa-car"></i> <span>{data.garagens}</span></div>
                    <div className="metros"><div className="ico"> <span>{data.tamanho}M²</span></div></div>
                    </div>
                    <div className="preco"><span>R$ <span>{data.valor}</span></span>
                     <div className="stado">{data.estado}</div> </div>
                </a>
                ))}
           </div>
            



          </main>


        </>
    )
}