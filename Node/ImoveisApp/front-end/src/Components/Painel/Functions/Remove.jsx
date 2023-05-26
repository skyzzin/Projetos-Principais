import Side from "../Side";
import '../../../../public/Styles/Painel/Functions/Remove.css'
import { useEffect, useState } from "react";

export default function Remover(){
  const [anuncio,setAnuncio] = useState([])
  
  useEffect(() => {
    fetch('http://127.0.0.1:5000/produtos')
      .then((response) => response.json())
      .then((data) => {
        setAnuncio(data);
        console.log(anuncio)
      });
  }, []);

  return(
    <>
      <div className="body">
        <Side />

        <div className="remove">
       
              {anuncio.map((e, i) => (
        <div className="anuncio" key={i}>
          <div className="identy">
            {e.id}
          </div>
        </div>
      ))}
         
        </div>
        
      </div>
    </>
  )
}