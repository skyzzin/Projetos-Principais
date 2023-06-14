import React, { useEffect, useState } from 'react'
import Side from '../Side'


function RemoveDepoimento() {
    const [depoimento,setDepoimento] = useState([])

    const Render = async()=>{
        const info = await (await fetch("http://127.0.0.1:5000/depoimentos")).json()
        setDepoimento(info)
        console.log(depoimento)   
    }

    const RemoveDepoimento = async ()=>{
        const data = {id:document.querySelector('.id').textContent}
        

        await fetch("http://127.0.0.1:5000/removedep",{
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify(data)
        })
    }

    useEffect(()=>{Render()},[])

  return (
    <div style={{display:'flex'}}>
          <Side />
    <div className="removeDepoimento" style={{
        display:'flex',
        margin:'0 auto'
       
    }}>
        {depoimento.map((e,i)=>(
           
           <>
           <div key={i} style={{
          
            width:'300px',
            border:'1px solid #222',
            height:"400px",
            borderRadius:'5px',
            padding:'10px',
            overflow:'hidden',
            position:'relative',
            background:'#ccc',
            margin: '10px',
           
            }}>
              
                <div onClick={RemoveDepoimento} className="fa-solid fa-trash remove-ico"> <br /><span className='id'>{e.id}</span></div>
                <img src={e.avatar} alt="" />
                {e.msg}
           </div>
           </>
        ))}

    </div>

  
    </div>
  )
}

export default RemoveDepoimento