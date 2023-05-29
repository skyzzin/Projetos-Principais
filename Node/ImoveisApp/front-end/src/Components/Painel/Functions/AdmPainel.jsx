import React, { useEffect, useState } from 'react'
import Side from '../Side'
import '../../../../public/Styles/Painel/Functions/AdminCadastro.css'
import { useNavigate } from 'react-router-dom'


function AdmPainel() {

  const auth = localStorage.getItem("nome")
  const navigate = useNavigate()
  useEffect(()=>{
      if(!auth){
          navigate('/painel')
      }
     
  },[])


  const [user,setUser] = useState([])
  const [nome,setNome] = useState()
  const [senha,setSenha] = useState()

  const Enviar = ()=>{
    const data = {
      nome:nome,
      senha:senha
    }

    fetch('http://127.0.0.1:5000/useradd',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    })

    fetch('http://127.0.0.1:5000/users')
    .then((e)=>{
      console.log(e)
    })

   

  }

  const Cadastrar = ()=>{
    let n = prompt('Nome De Administrador')
    
    let s = prompt('Senha De Administrador')

     const data = {nome:n,senha:s}
 
    fetch('http://127.0.0.1:5000/users',{
      method:'POST',
      headers:{'Content-Type':"application/json"},
      body:JSON.stringify(data)
    })
    .then((e)=>{
      return e.json()
    })
    .then((res)=>{
       setUser(res)
    })
  }

  return (
 <>
    <div className="body">
    <Side />

    <div className="adminpainel">
    <input type="text" placeholder='Nome De Usuario' onChange={(e)=>{setNome(e.target.value)}} />
    <input type="password" placeholder='Senha De Usuario'  onChange={(e)=>{setSenha(e.target.value)}} />

    <button onClick={Enviar}>Cadastrar</button>
    <br />
    <button onClick={Cadastrar}>Ver Contas</button>
    <div className="cadastrados">

    {user.map((e,i)=>(
      
       <div className="colunas"  key={i}>
         <div className="nome">
           <b>Nome</b>
           <span>{e['nome']}</span>
          
         </div>
         <div className="senha">
           <b>Senha</b>
           <span>{e['senha']}</span>
          
         </div>
       </div>
       
    
    ))} 
   
   
      
    </div>
    </div>
  


    </div>


 </>
  )
}

export default AdmPainel