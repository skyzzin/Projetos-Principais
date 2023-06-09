import Side from "../Side";
import '../../../../public/Styles/Painel/Functions/Remove.css'
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Remover(){


  const navigate = useNavigate()
  const auth = localStorage.getItem("nome")
  useEffect(()=>{
      if(!auth){
          navigate('/painel')
      }
  },[])
  const [anuncio,setAnuncio] = useState([])

 
  
  

  
  
  useEffect(() => {
    fetch('http://127.0.0.1:5000/produtos')
      .then((response) => response.json())
      .then((data) => {
        setAnuncio(data);
        

      });
  }, []);

  const RemoveItem = ((e)=>{
    const id =Number(e.target.textContent)
    const jsonID = {id:id}
    
    fetch('http://127.0.0.1:5000/remove',{
      method:'POST',
      headers:{"Content-Type":'application/json'},
      body:JSON.stringify(jsonID)
    })

    fetch('http://127.0.0.1:5000/produtos')
    .then((response) => response.json())
    .then((data) => {
      setAnuncio(data);
     
    });

   
  })

  return(
    <>
      <div className="body">
        <Side />

        <div className="remove">
       
              {anuncio.map((e, i) => (
        <div className="anuncio" key={i}>
          <i className="fa-solid fa-trash remove-ico" onClick={RemoveItem}> <br /> {e.id}</i>
          <img src={e.img} alt="" />
          <b>{e.nome}</b>
          
     
        </div>
      ))}
         
        </div>
        
      </div>
    </>
  )
}