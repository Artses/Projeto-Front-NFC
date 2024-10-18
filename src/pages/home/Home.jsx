import './home.css'
import { Link } from "react-router-dom"
import Usuario from '../../assets/do-utilizador.png'
const Home =()=>{
    return(
        <div>
        <div className='navbar'>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>

            
            <Link to="/View">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M432 64L208 64c-8.8 0-16 7.2-16 16l0 16-64 0 0-16c0-44.2 35.8-80 80-80L432 0c44.2 0 80 35.8 80 80l0 224c0 44.2-35.8 80-80 80l-16 0 0-64 16 0c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192zm64 32c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 192c-17.7 0-32 14.3-32 32z"/></svg>
            </Link>
            

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>   
        </div>
        <div className='container_home'>
            <div className='perfil'>
                <img src={Usuario} alt="" />
                <div>
                    <h1>NOME DO USUARIO</h1>
                    <p>Plano: Personalizado</p>
                </div>
                <hr className='linha-horizontal'></hr>
            </div>
            <div className='descricao'>
                <h1>Banco Funcional de Presença</h1>
                <p>Nosso aplicativo foi criado para simplificar o registro de presença em diversos ambientes, como escolas, empresas e outros locais onde é necessário monitorar a presença de pessoas. Usando tecnologias automatizadas, como NFC, biometria e outras, o sistema permite o registro de forma rápida e segura. Todas as informações são armazenadas em um banco de dados central, oferecendo um monitoramento eficiente e em tempo real. Facilite o controle de presença com uma solução moderna e versátil!</p>
            </div>
        </div>

        <div className='container_rodape'>
            
        </div>

        </div>

    )
}


export default Home