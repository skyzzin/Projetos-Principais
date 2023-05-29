import React, { useEffect } from 'react'
import {useNavigate,BrowserRouter,Routes,Route} from 'react-router-dom'

const PrivateRouter = ({children,redirectTo}) =>{
   

    const Auth = async()=>{
        const valor = (await fetch('http://127.0.0.1:5000/auth')).json()

        return valor
    }

    const navigate = useNavigate()
    return Auth ? children : useEffect(()=>{navigate('/painel')},[])
}

export default PrivateRouter







