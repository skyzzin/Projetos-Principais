import React, { useContext, useEffect, useState } from 'react'
import '../../../public/Styles/Painel/Login.css'
import { useNavigate } from 'react-router-dom'
import AdmPainel from './Functions/AdmPainel'
import Cadastrar from './Functions/Cadastrar'
import Editar from './Functions/Editar'
import EditarItem from './Functions/EditarItem'
import Remover from './Functions/Remove'
import UserCTX from '../../Contexts/UserCTX'



function LoginPainel() {

  const {isAuth} = useContext(UserCTX)
  

  return (
    <>

    <h1>{isAuth}</h1>



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
      <input type="text" placeholder='Nome De Administrador' />
      <input type="text" placeholder='Senha De Administrador' />
      <button className='submit'>Entrar</button>
    </form>
    </div>
    </>
  )
}

export default LoginPainel