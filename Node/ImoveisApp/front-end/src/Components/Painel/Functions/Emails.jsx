import React, { useState } from 'react'
import Side from '../Side'
import '../../../../public/Styles/Painel/Functions/Emails.css'

function Emails() {
    const [email,setEmail] = useState('')

  return (
    <div className="body">
        <Side />

        <div className="emails">
            <h1>Emails Cadastrados Para Promoções</h1>
            <div className="coluna">
                
            </div>
        </div>

    </div>
  )
}

export default Emails