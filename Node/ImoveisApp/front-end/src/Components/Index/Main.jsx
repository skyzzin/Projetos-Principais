
import '../../../public/Styles/Main.css'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import casa from '../../../public/assets/casa.jpg'
import bg from '../../../public/assets/bg.jpg'

import ContextApi from '../../Contexts/ContextApi'
import WppFloat from './WppFloat'





export default function Main() {


    const { dados, Item, setItem } = useContext(ContextApi)


    useEffect(() => {
        fetch('http://127.0.0.1:5000/produtos')
            .then((item) => {

                return item.json()
            }).then((data) => {
                setItem(data)
            })
    }, [])

    const Filter = (e) => {
        const nomeDaId = e.target.id;
        const valor = e.target.value


        fetch('http://127.0.0.1:5000/produtos')
            .then(response => {

                return response.json();
            })
            .then(items => {
                const itemsFiltrados = items.filter(item => item[nomeDaId] >= valor);

                setItem(itemsFiltrados)
            })

    };

    const [depoimentos, setDepoimentos] = useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/depoimentos')
        .then((e)=>{return e.json()})
        .then((data)=>{setDepoimentos(data)})
    },[])

    return (
        <>


            <img src={bg} className='bg' alt="" />
            <main className='main'>
                <section >
                    <div className="FilterBtn" onClick={() => {
                        const nav = document.querySelector('.Filter')

                        nav.classList.toggle('activity')
                    }}>
                        Filtro
                    </div>
                    <nav className='Filter'>
                        <select name="" id="quartos" onChange={Filter}>
                            <option value="0">Quartos</option>
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

                        <select name="" id="banheiros" onChange={Filter}>
                            <option value="0">Banheiros</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                        </select>

                        <select name="" id="garagens" onChange={Filter}>
                            <option value="0">Garagem</option>
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

                        <select name="" id="tamanho" onChange={Filter}>
                            <option value="0">Metros M²</option>
                            <option value="10">10M²</option>
                            <option value="20">20M²</option>
                            <option value="30">30M²</option>
                            <option value="40">40M²</option>
                            <option value="50">50M²</option>
                            <option value="60">60M²</option>
                            <option value="70">70M²</option>
                            <option value="80">80M²</option>
                            <option value="100">100M²</option>
                        </select>

                        <select name="" id="valor" onChange={Filter}>
                            <option value="0">Preço</option>
                            <option value="5000">5.000R$</option>
                            <option value="10000">10.000R$</option>
                            <option value="20000">20.000R$</option>
                            <option value="30000">30.000R$</option>
                            <option value="60000">60.000R$</option>
                            <option value="90000">90.000R$</option>
                            <option value="200000">200.000R$</option>
                            <option value="500000">500.000R$</option>
                            <option value="1000000">1.000.000R$</option>
                            <option value="2000000">2.000.000R$</option>
                            <option value="5000000">5.000.000R$</option>
                        </select>
                    </nav>

                </section>

                <h1 style={{
                    marginTop: 40,
                    paddingBottom: 50,
                    fontSize: 40
                }}>Escolhidos a dedo para você</h1>
                <div className="cards">
                    {Item.map((data, i) => (
                        <Link to={`/anuncio/${data.id}`} key={i}>
                            <h1>{data.local}</h1>

                            <div className="card">
                                <div className="estado">{data.estado}</div>
                                <img src={data.img} alt="" />

                                <div className="informs">
                                    <div className="nome">{data.nome}</div>
                                    <div className="desc">
                                        <span style={{ 
                                            fontSize: '12pt',
                                     }}>{data.desc} </span>
                                    </div>
                                    <div className="icons">
                                        <span>M² <br /> <b>{data.tamanho}</b> </span>
                                        <span>DORM <br /> <b>{data.quartos}</b></span>
                                        <span>BAN <br /><b>{data.banheiros}</b></span>
                                        <span>VAGAS <br /> <b>{data.garagens}</b></span>
                                    </div>
                                    <div>
                                        <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                        >R$ {data.valor} <div className="ctt">Contato</div></span>

                                        <span style={{
                                            background:'red',
                                            width:'50px',
                                            padding:'5px',
                                            display:'flex',
                                            position:'absolute',
                                            top:'10px',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            borderRadius: 5,
                                            }}>
                                        <i className="fa-solid fa-circle-info"
                                        style={{
                                        color:'white',
                                        fontSize: '12pt',
                                       
                                    
                                        }}> {data.id}</i>
                                        </span>


                                    </div>

                                </div>
                            </div>

                        </Link>


                    ))}
                </div>
                <WppFloat />
            </main>

                        
            <div className="depoimentos"
                style={{
                    display: 'flex',    
                    justifyContent:'center',
                    alignItems:'center',
                    width: '100%',
                    flexDirection:'column',
                    padding: "50px",

                }}>
                    <h1>Depoimentos</h1>
                    <br /><br />

                <div className="d-container"
                style={{
                    display:'flex',
                    gap:'20px',
                    flexWrap:'wrap',
                    justifyContent:'center'
                }} >
                {depoimentos.map((e,i)=>(
                    <div key={i * 2} 
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        width:'48%',
                        justifyContent:'center',
                        background:'white',
                        overflow:'hidden',
                        borderRadius: 5,
                        gap:'5px'
                    }}>
                        <br />
                        <img src={e.avatar} alt="" style={{
                            width:'120px',
                            height:'120px',
                            borderRadius: '100%',
                            margin: '0 auto',

                            }} />
                        <span style={{margin: '10px',}}>{e.msg}</span>
                    </div>
               ))}
                </div>
              




            </div>

        </>
    )
}