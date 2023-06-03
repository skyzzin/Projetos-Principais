import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import '../../../public/Styles/Anuncio.css'


export default function Anuncio(){
    
   
    const {id} = useParams()
    const [anuncio,setAnuncio] = useState([])

   

   
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/produtos').then((e)=>{
            return e.json()
        })
        .then((item)=>{
            const filter = item.filter(i => i.id == id)
            setAnuncio(filter[0])

        })
     
     
            window.scrollTo(0, 0);
        
    },[])
  
    const Desc = ()=>{
        document.querySelector('.descricao').classList.toggle('activity')
    }

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
              <div className="descr">
                    <hr style={{borderTop:'1px solid black'}} />
                     <br />
                    <h1>Descrição</h1>
                    {anuncio.desc}
              </div>

              <div className="contato">
                <h1>Entre Em Contato</h1>
              <input type="text" placeholder="Email" />
                <textarea name="text" id="" cols="30" rows="10" className="textarea" 
                defaultValue={`Olá Gostaria De Saber Mais Sobre o Imovel De Id =>  ${id} `}>
                </textarea>
                <button type="submit">Enviar</button>
              </div>
                

        
                 
           </div>

           <Footer />
        </>
    )
}