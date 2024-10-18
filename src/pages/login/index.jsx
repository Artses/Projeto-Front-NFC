
import './style.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Pc from '../../assets/pc_img_login.png'
function Login() {

  const[email, setEmail] = useState('');
  const[senha,setSenha] = useState('')
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      // Fazendo a requisição POST para a API com nome e senha
      const response = await axios.post('https://projeto-api-nfc-production.up.railway.app/auth/Login', {
        email: email,
        senha: senha
      });

      // Verificando se o login foi bem-sucedido
      if (response.status === 201) {
        console.log("Login bem-sucedido");
        navigate('/Home'); // Redireciona para a página home após o login
      }
    } catch (error) {
      console.error("Erro ao fazer login", error);
      alert("Email ou senha incorretos!");
    }
  };
  console.log("Email:", email);
  console.log("Senha:", senha);

  return (
    
      <div className='container'>
        <div className='div_bemvindo'>
          <h1>Bem-vindo</h1>
          <p>Faça seu login para prosseguir</p>
          <img src={Pc} alt="" />
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          
            <h1>LOGIN</h1>
        
            <input type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name='password' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <button type='button' className='button-37' onClick={handleLogin}>Entrar</button>
          
            <p>Ainda não tem login?<Link to="/Cadastro"> Cadastro</Link></p>
        </form>
      </div>
      
  )
}

export default Login
