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
        <style>
          
        </style>
        <Link to="/" className="back" style={css.back} >
        <i className="fa-solid fa-arrow-left"></i>
        </Link>
           <div className="anuncio-container" style={css.container}>
            <br />
                <h1>{anuncio.nome}</h1>
                <img src={anuncio.img} style={css.imgHouse} alt="" />
                <div className="desc" style={css.desc}>
                <div className="quartos"><i className="fa-sharp fa-solid fa-bed"></i> <span>{anuncio.quartos}</span></div>
                    <div className="banheiro"><i className="fa-solid fa-bath"></i> <span>{anuncio.banheiros}</span></div>
                    <div className="garagem"><i className="fa-solid fa-car"></i> <span>{anuncio.garagens}</span></div>
                    <div className="metros"><div className="ico"> <span>{anuncio.tamanho}M²</span></div></div>
                </div>

                <div className="estado" style={css.estado}>
                    <span style={css.price} >R$ {anuncio.valor}</span>
                    <span style={css.price} >{anuncio.estado}</span>
                </div>

                <div className="info">
                    <br /><br />
                    <h1>Descrição</h1>
                    <div className="descricao" style={css.descricao}>
                        <div className="more" onClick={Desc} style={{fontSize:'20pt',cursor:'pointer'}}>. . .</div>
                    </div>
                </div>

           </div>

           <Footer />
        </>
    )
}

const css = {
    container:{
            width: '100%',
            height: '150vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
    },
    imgHouse:{
        width: '60%',
        height: '50vh',
        borderRadius: '15px',
        boxShadow:'0px 0px 10px black'
    },
    desc:{
        display: 'flex',
        width: '60%',
        justifyContent: 'space-around',
        fontSize: '20pt',
        marginTop: '10px',
    },
    back:{
        position: 'absolute',
        top: '20px',
        left:'20px',
        fontSize: '40pt',
    },
    estado:{
        display: 'flex',
        
        width:'60%',
        fontSize: '20pt',
        marginTop: '50px',
        gap:'10px'
    },
    price:{
        display: 'flex',
        padding: '20px 30px',
        backgroundColor: 'white',
        borderRadius: '15px',
        textTransform: 'capitalize'
    },
    descricao:{
        width: '90vh',
       
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'white',
        borderRadius: '10px',
    },
  
}