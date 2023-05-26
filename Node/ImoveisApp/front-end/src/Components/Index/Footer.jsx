
import '../../../public/Styles/Footer.css'
import ico from '../../../public/assets/ico.png'

export default function Footer(){
    return(
        <footer>
            <div data='container-1'>
            <h2>
                <i className="fa-brands fa-instagram"/>
                 Siga-nos no Instagram : 
                 <a data='hover' href="https://www.instagram.com/imoveisgoogle/">@imoveisgoogle</a>
            </h2>
           
            <h1>ENTRE EM CONTATO AGORA!</h1>

            <h3> <i className="fa-solid fa-phone"></i> (61) 99195-8209</h3>
            

            <h2>CRECI 19337</h2>
            </div>

            <div data='container-2'>
                <div>
                    <h1>Nossos Contatos</h1>
                    <a href="" ><i className="fa-solid fa-envelope"/>Claudia@imoveisgoogle.com.br</a>
                    <span><i className="fa fa-phone-square"/> (61) 99195-8209 <i className="fa-brands fa-whatsapp"/></span>
                    <span><i className="fa fa-phone-square"/> (61) 99195-8209 <i className="fa-brands fa-whatsapp"/></span>
                    <span><i className="fa-solid fa-location-dot"/> Bloco D Sala, 102, Asa Sul - Brasília/DF
                    <img src={ico} alt="" /></span>
                </div>

                <div>
                    <h1>INSTITUCIONAL</h1>
                    <a href="" className='link'>Principal</a>
                    <a href="" className='link'>Comprar</a>
                    <a href="" className='link'>Alugar</a>
                    <a href="" className='link'>Contrato</a>
                </div>

                <div>
                    <h1>CADASTRE-SE</h1>
                    Cadastre seu email abaixo para receber nossas promoções e contatos.
                   
                        <input type="text" placeholder='Digite Seu Email' />
                        <button className='btnSend'>Enviar</button>
                   
                </div>
            </div>
     
        </footer>
    )
}

