import { useParams } from "react-router-dom"
import Side from "../Side";
import '../../../../public/Styles/Painel/Functions/EditItem.css'
import { useEffect, useState } from "react";

export default function EditarItem(){

    

    const [titulo,setTitulo] = useState('')
    const [tamanho,setTamanho] = useState('')
    const [preco,setPreco] = useState('')
    const [quartos,setQuartos] = useState('')
    const [banheiros,setBanheiros] = useState('')
    const [garagens,setGaragens] = useState('')
    const [estado,setEstado] = useState('')
    


    const { id } = useParams();
    const [valores,setValores] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:5000/produtos')
    .then((data)=>{
        return data.json()
    
    })
    .then((e)=>{
        setTitulo(e[0].titulo)
        setTamanho(e[0].tamanho)
        setPreco(e[0].valor)
        setQuartos(e[0].quartos)
        setBanheiros(e[0].banheiros)
        setGaragens(e[0].garagens)
        setEstado(e[0].estado)
      


        const filter = e.filter(item => item.id == id)
        setValores(filter[0])
        
    })
   
    },[])

    const Atualizar = ()=>{
        const data = {
            id:id,
            titulo:titulo,
            tamanho:tamanho,
            preco:preco,
            quartos:quartos,
            garagens:garagens,
            banheiros:banheiros,
            estado,estado
        }

        fetch('http://127.0.0.1:5000/update',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then((e)=>{
            console.log(e.json())
        })
    }




    return(
        <>
        <div className="body">
        <Side />

        <div className="edit-container">
            <img src={valores.img} className="editbg" alt="" />
            <div className="inputs">

                <div className="col1">
                <input type="text" placeholder="Titulo" onChange={(e)=>{setTitulo(e.target.value)}} />
                <input type="number" placeholder="Metros M²" onChange={(e)=>{setTamanho(e.target.value)}} />
                <input type="text" placeholder="Preço" onChange={(e)=>{setPreco(e.target.value)}} />
                </div>

                <div className="col2">
                <input type="number" placeholder="Quartos" onChange={(e)=>{setQuartos(e.target.value)}} />
                <input type="number" placeholder="Banheiros" onChange={(e)=>{setBanheiros(e.target.value)}} />
                <input type="number" placeholder="Garagens" onChange={(e)=>{setGaragens(e.target.value)}} />
                </div>

                <div className="col">
                    <select name="" className="select" id="" onChange={(e)=>{setEstado(e.target.value)}} >
                        <option value="Estado">Estado</option>
                        <option value="venda">A Venda</option>
                        <option value="alugar">Alugar</option>
                    </select>

                    <br /> <br />
                  
                </div>
              
            </div>
            <br />
            <textarea name="" id="" cols="30" rows="10" style={{marginLeft: '10px',}} placeholder="Descrição"></textarea>
            <br /><br />
            <button onClick={Atualizar} style={css.button}>Atualizar</button>

          
            

        </div>


        </div>
           
        </>
    )
}

const css = {
    button:{
        width:'200px',
        height:'40px',
        borderRadius: '5px',
        cursor:'pointer'
    }
}