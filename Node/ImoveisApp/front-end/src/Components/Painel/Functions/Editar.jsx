import Side from "../Side";
import '../../../../public/Styles/Painel/Functions/Editar.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Editar() {
  const [anuncio,setAnuncio] = useState([])
  
  useEffect(() => {
    fetch('http://127.0.0.1:5000/produtos')
      .then((response) => response.json())
      .then((data) => {
        setAnuncio(data);
      });
  }, []);

  console.log(anuncio)
  

  return (

    
    <>
      
      <div className="body">
      <Side />
      <div className="editar">
         {anuncio.map((e, i) => (
          <div className="anuncio" key={i}>
            <Link to={`/painel/editar/${e.id}`}><i className="fa-solid fa-pen"> <br /> {e.id}</i></Link>
          </div>
      ))}
      </div>
      </div>
    
   
    </>
  )
}

