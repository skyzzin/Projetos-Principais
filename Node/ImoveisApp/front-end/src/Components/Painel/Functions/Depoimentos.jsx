import React, { useEffect, useState } from 'react'
import Side from '../Side'
import { useNavigate } from 'react-router-dom'

function Depoimentos() {

    const auth = localStorage.getItem("nome")
    const navigate = useNavigate()
    useEffect(()=>{
        if(!auth){
            navigate('/painel')
        }
       
    },[])

    const [foto,setFoto] = useState('')
    const [msg,setMsg] = useState('')
    const [nome,setNome] = useState('')

    const Enviar = ()=>{
     const data = {
        msg:msg,
        nome:nome
     }
    
        const formData = new FormData();
        formData.append("avatar", foto);
        for (const key in data) {
            formData.append(key, data[key]);
        }
    
        fetch('http://127.0.0.1:5000/depoimentos', {
            method: 'POST',
            headers: { 'enctype': 'multipart/form-data' },
            body: formData
        })

        console.log(foto)
    }
  




  return (

    <div style={{display:'flex'}}>

        <Side />
    <div className="depoimentos" 
    style={{
        width:'100%',
        display:'flex',
        
        alignItems:'center',
        flexDirection: 'column',
    }}>
        <h1>Adicione Depoimentos</h1>
        <br /><br /><br />
        <label htmlFor="foto" style={{
            width:'100px',
            height:'100px',
            border:'1px solid red',
            borderRadius: '100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            fontSize:'16pt',
            fontWeight:'1000',
            cursor:'pointer'
        }}>Perfil</label>
        <input type="file" name="foto" onChange={(e) => { setFoto(e.target.files[0]) }} id="foto" style={{display:'none'}} />
        <br />
        <input type="text" onChange={(e)=>{setNome(e.target.value)}} style={{width:400}} placeholder='Nome Do Autor' />
        <br />
        <textarea name="" id="" cols="30" rows="10" placeholder='Depoimento' onChange={(e)=>{setMsg(e.target.value)}}></textarea>
        <br />
        <button style={{width:200,cursor:'pointer'}} onClick={Enviar}>Enviar</button>

    </div>

    </div>
    
  )
}

export default Depoimentos