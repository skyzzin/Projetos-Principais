import Header from "./Header";
import Footer from './Footer'
import '../../../public/Styles/Sobre.css'
import casa from '../../../public/assets/casa.png'
import tel from '../../../public/assets/tel.png'
import local from '../../../public/assets/local.png'



export default function Sobre() {

    window.scrollTo(0, 0);
    return (
        <>
            <Header />
            <div className="container">
            <section className="sobre">
                <div className="info">
                    <img src={casa} alt="" />
                    <h3>Sobre a Imobiliária Modelo</h3>
                </div>

                <span className="paragrafos">
                    <p>Nosso principal objetivo é a satisfação do cliente, atendendo com perfeição às suas necessidades.Possuímos uma equipe treinada e atualizada, proporcionando o mais alto nível de eficiência técnica.</p>
                    <p>O principal diferencial da imobiliária está em sua visão empresarial, adquirida no mundo corporativo que foi transferida e implementada à empresa, para que além do “know how” técnicon possa ser garantida uma gestão profissional, dinâmica, moderna e com foco no desejo do cliente.</p>
                    <p>Utilizamos as mais modernas ferramentas disponíveis no mercado para controle de banco de dados de imóveis, proprietários, vendedores, compradores, fiadores, bem como geração de relatórios financeiros, gerenciais, análises de risco, dentre outros.</p>
                    <p>Com uma postura inovadora acredita numa parceria sólida, com uma visão de médio e longo prazo, formando a base para um relacionamento cujos benefícios sejam mútuos. Para isso vem por meio desta oferecer um serviço de assessoria imobiliária embasada numa inovadora assessoria periódica que visa um atendimento pleno e completo de suas necessidades.</p>             
                </span>
            </section>

            <section className="sobre">
                <div className="info">
                        <img src={tel} alt="" />
                        <span> Telefones para contato</span>
                    </div>

                   <div className="sobre">
                   <span> (61) 99195-8209 </span>
                    <span>(61) 99195-8209</span>
                   </div>
            </section>

            <div className="sobre">
                <div className="info">
                        <img src={local} alt="" />
                        <span> Localização da Imobiliária Modelo</span>
                    </div>
                <div className="sobre" >
                <a href="" style={{color:'red'}}>Av. Paulista, 300, Cerqueira Cesar - São Paulo / SP - 3 Andar CEP 05438-300</a>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15356.123224015773!2d-47.9075032437!3d-15.802329574187288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3addb285371d%3A0x16a7d0bbba9f96b9!2sSHCS%20Com%C3%A9rcio%20Local%20Sul%20102%20-%20Asa%20Sul%2C%20Bras%C3%ADlia%20-%20DF%2C%2070297-400!5e0!3m2!1spt-BR!2sbr!4v1685076922947!5m2!1spt-BR!2sbr" className="iframe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Footer/>
        </>
    )
}