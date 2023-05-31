import Header from "./Header";
import '../../../public/Styles/Contato.css'
import Footer from "./Footer";

import contato from '../../../public/assets/contato.png'




export default function Contato(){
    return(
        <>
         <Header />
         <div data='contato'>
           
            <div data="info"><img src={contato} alt="" /> <span>Entre Em Contato</span></div>

            <form data='form'>
                <input type="text" placeholder="Informe Seu Nome" />
                <input type="text" placeholder="Informe Seu Email"/>
                <input type="text" placeholder="Inform Seu Telefone"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Deixe Sua Mensagem"></textarea>
                <button style={{margin:0,width:'100%',border:'1px solid #ccc',color:'#222'}}>Enviar</button>
            </form>

         </div>
        <Footer />
        </>
    )
}