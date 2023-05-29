import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import '../../../public/Styles/Anuncio.css'


export default function Anuncio(){
    
   
    const {id} = useParams()
    const [anuncio,setAnuncio] = useState([])

    fetch('http://127.0.0.1:5000/produtos').then((e)=>{
        return e.json()
    })
    .then((data)=>setAnuncio(data[0]))

    const Desc = ()=>{
        document.querySelector('.descricao').classList.toggle('activity')
    }
    useEffect(()=>{
     
            window.scrollTo(0, 0);
        
    },[])
  


    return(
        <>
      
        <Link to="/" className="back"  >
        <i className="fa-solid fa-arrow-left"></i>
        </Link>


           <div className="anuncio-container">
                <img src={anuncio.img} alt="" />
                <div className="infos">

                    <h1>{anuncio.nome}</h1> 
                    <div className="row">
                    <div><i className="fa-sharp fa-solid fa-bed"></i> <span>{anuncio.quartos}</span></div>
                    <div className="banheiro"><i className="fa-solid fa-bath"></i> <span>{anuncio.banheiros}</span></div>
                    <div className="garagem"><i className="fa-solid fa-car"></i> <span>{anuncio.garagens}</span></div>
                    <div className="metros"><div className="ico"> <span>{anuncio.tamanho}M²</span></div></div>
                    </div>
              </div>
              <div className="desc">
                    <hr style={{borderTop:'1px solid black'}} />
                     <br />
                    <h1>Descrição</h1>
                    {anuncio.desc}
              </div>

              <div className="contato">
                <h1>Entre Em Contato</h1>
              <input type="text" placeholder="Email" />
                <textarea name="" id="" cols="30" rows="10" className="textarea" 
                value={`Olá Gostaria De Saber Mais Sobre o Imovel => ${anuncio.nome} Id =>  ${anuncio.id} `}>
                </textarea>
                <button type="submit">Enviar</button>
              </div>
                

        
                 
           </div>

           <Footer />
        </>
    )
}