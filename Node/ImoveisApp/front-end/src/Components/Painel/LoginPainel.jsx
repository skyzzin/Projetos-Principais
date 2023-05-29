import React, { useContext, useEffect, useState } from 'react'
import '../../../public/Styles/Painel/Login.css'
import { useNavigate } from 'react-router-dom'
import AdmPainel from './Functions/AdmPainel'
import Cadastrar from './Functions/Cadastrar'
import Editar from './Functions/Editar'
import EditarItem from './Functions/EditarItem'
import Remover from './Functions/Remove'




function LoginPainel() {
  const [nome,setNome] = useState()
  const [senha,setSenha] = useState()
  const navigate = useNavigate()

  const data = {
    nome:nome,senha:senha
  }

  const Enviar = ()=>{
    fetch('http://127.0.0.1:5000/finduser',{
      method:"POST",
      headers:{'Content-Type':"application/json"},
      body:JSON.stringify(data)
    }).then((e)=>{
      e.text().then((el)=>{
        if(nome == el){
          localStorage.setItem("nome",nome)
        }
      })
    })
  }

  useEffect(()=>{
    const auth = localStorage.getItem("nome")
    if(auth){
      navigate('/painel/cadastrar')
    }
  })
 
  

  return (
    <>
   <div className="body" style=
    {{display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexDirection:'column'}}
   >


    <div className="form">
    <h1>Tela De Login</h1>
    <h1> Estado </h1>
    </div>
    <form action="" className="formulario" >
      <input type="text" placeholder='Nome De Administrador' onChange={(e)=>{setNome(e.target.value)}} />
      <input type="password" placeholder='Senha De Administrador' onChange={(e)=>{setSenha(e.target.value)}} />
      <button className='submit' onClick={Enviar}>Entrar</button>
    </form>
    </div>
    </>
  )
}

export default LoginPainel