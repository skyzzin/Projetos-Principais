
import { useState } from 'react'
import '../../../public/Styles/Painel/Painel.css'

export default function Painel(){
    const [titulo,setTitulo] = useState('')
    const [tamanho,setTamanho] = useState('')
    const [valor,setValor] = useState('')
    const [quartos,setQuartos] = useState('')
    const [banheiros,setBanheiros] = useState('')
    const [garagens,setGaragens] = useState('')
    const [estado,setEstado] = useState('alugar')
    const [foto,setFoto] = useState('')

    const Submit = (e)=>{
        e.preventDefault()
    }
    const Enviar = () => {
        const data = {
            titulo: titulo,
            tamanho: tamanho,
            valor: valor,
            quartos: quartos,
            banheiros: banheiros,
            garagens: garagens,
            estado: estado
        }
    
        const formData = new FormData();
        formData.append("foto", foto);
        for (const key in data) {
            formData.append(key, data[key]);
        }
    
        fetch('http://127.0.0.1:5000/addproduto', {
            method: 'POST',
            headers: { 'enctype': 'multipart/form-data' },
            body: formData
        })
    }


    return(
       

        <>
        <div className="body">

     
            <form onSubmit={Submit} className='form' >
               <div>
                <label htmlFor="">Titulo</label>
                <input type="text" id='title' onChange={(e)=>{setTitulo(e.target.value)}} />
               </div>

               <div>
                <label htmlFor="">Metros M²</label>
                <input type="number" id='tamanho'onChange={(e)=>{setTamanho(e.target.value)}} />
            </div>

            <div>
                <label htmlFor="">Preço</label>
                <input type="number" id='valor' onChange={(e)=>{setValor(e.target.value)}} />
            </div>

               <div>
              
                <select name="" id="quartos" onChange={(e)=>{setQuartos(e.target.value)}}>
                    <option value="Quartos">Quartos</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
               </div>

               <div>
            
                <select name="" id="banheiros" onChange={(e)=>{setBanheiros(e.target.value)}}>
                    <option value="Banheiros">Banheiros</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
               </div>

               <div>
            
            <select name="" id="garagens" onChange={(e)=>{setGaragens(e.target.value)}}>
                <option value="Garagem">Garagens</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
           </div>

            

                <br />

                <input type="file" name="foto" id="foto" onChange={(e)=>{setFoto(e.target.files[0])}} />

                

                <select name="" id="estados" onChange={(e)=>{setEstado(e.target.value)}}>
                    <option value="alugar">Alugar</option>
                    <option value="alugar">A Venda</option>
                </select>
                <br />

                




                <button type="reset" onClick={Enviar}>Cadastra</button>
            </form>
            </div>
        </>
    )
}