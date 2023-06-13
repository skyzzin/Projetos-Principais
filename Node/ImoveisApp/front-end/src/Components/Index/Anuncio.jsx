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
                <div>
                    <h1 style={{textTransform:'capitalize'}}>{anuncio.nome}</h1>
                    <br />
                <div style={{display:'flex',gap:'5px'}}>
                <img src={anuncio.img} alt=""/>
                <div className="column" style={{padding:'10px',display:'flex',fontSize:'14pt',gap:'5px',flexDirection:'column'}}>
                <span><b><div className="fa-solid fa-bath"></div> Banheiros {anuncio.banheiros} </b></span>
                <span><b><div class="fa-solid fa-car"></div> Garagens {anuncio.garagens}</b></span>
                <span><b><div class="fa-solid fa-bed"></div> Quartos {anuncio.quartos}</b></span>
               
                <br /><br />

                <h3>Descrição</h3>
                <div className="descc">
                    
                    {anuncio.desc}
                </div>

                </div>
                </div>
                <br />
                <div style={{fontSize:'20pt',display:'flex',gap:'20px'}}>
                   
                <span><b style={{textTransform:'capitalize'}}>{anuncio.estado}</b></span>
                <span><b> R$ {anuncio.valor}</b></span>
                </div>

                </div>
                  
                     
           </div>

           
           <div className="contato">
                <h1>Entre Em Contato</h1>
              <input type="text" placeholder="Email" />
                <textarea name="text" id="" cols="30" rows="10" className="textarea" 
                defaultValue={`Olá Gostaria De Saber Mais Sobre o Imovel De Id =>  ${id} `}>
                </textarea>
                <button type="submit">Enviar</button>
              </div>



           <Footer />
        </>
    )
}