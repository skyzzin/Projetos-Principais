import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route,Routes,BrowserRouter} from 'react-router-dom'

import App from './Components/App.jsx'
import AppPainel from './Components/AppPainel.jsx'








ReactDOM.createRoot(document.getElementById('root')).render(

     <BrowserRouter>
      <Routes>
     <Route path='/' Component={App} />
     <Route path='/painel' Component={AppPainel} />
      </Routes>
    </BrowserRouter>

)



