import Footer from "./Index/Footer";
import Header from "./Index/Header";
import Main from "./Index/Main";

import ContextApi from "../Contexts/ContextApi";
import { useState } from "react";




export default function App(){

    const [dados,setDados] =useState('')
    const [Item,setItem] = useState([{}])

    return(
        <>
        <ContextApi.Provider value={{dados,setDados,Item,setItem}}>
        <Header />
        <Main />
        <Footer />
        </ContextApi.Provider>

        </>
    )
}
