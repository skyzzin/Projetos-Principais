import React from 'react'
import '../../../public/Styles/Painel/Login.css'
function LoginPainel() {
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