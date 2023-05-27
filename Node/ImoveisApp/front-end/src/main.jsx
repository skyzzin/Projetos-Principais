import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route,Routes,BrowserRouter} from 'react-router-dom'

import App from './Components/App.jsx'
import AppPainel from './Components/AppPainel.jsx'
import Sobre from './Components/Index/Sobre.jsx'
import Contato from './Components/Index/Contato.jsx'
import Cadastrar from './Components/Painel/Functions/Cadastrar.jsx'
import Remover from './Components/Painel/Functions/Remove.jsx'
import Editar from './Components/Painel/Functions/Editar.jsx'
import EditarItem from './Components/Painel/Functions/EditarItem.jsx'
import Anuncio from './Components/Index/Anuncio.jsx'
import LoginPainel from './Components/Painel/LoginPainel.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
      <Routes>
     <Route path='/' Component={App} />
     <Route path='/anuncio/:id' Component={Anuncio} />
     <Route path='/sobre' Component={Sobre} />
     <Route path='/contato' Component={Contato} />

     <Route path='/painel' Component={AppPainel} />

     <Route path='/painel/cadastrar' Component={Cadastrar} />
     <Route path='/painel/remover' Component={Remover} />
     <Route path='/painel/editar' Component={Editar} />
     <Route path='/painel/editar/:id' Component={EditarItem} />

     <Route path='/painel/login' Component={LoginPainel} />

        

    </Routes>
    </BrowserRouter>

)



