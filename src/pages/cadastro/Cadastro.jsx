import './cadastro.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
const Cadastro = () =>{
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleCadastro = async () => {
    if (email !== confirmEmail) {
      alert("Os e-mails não coincidem!");
      return;
    }
    if (senha !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    try {
      const response = await axios.post('https://projeto-api-nfc-production.up.railway.app/auth/register', {
        email: email,
        senha: senha
      });

      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!");
        navigate('/'); // Redireciona para a página de login após o cadastro
      }
    } catch (error) {
      console.error("Erro ao realizar cadastro:", error);
      alert("Erro ao realizar cadastro, tente novamente.");
    }
  };
    return(
      <div className='container'>
        <div className='div_bemvindo'>
          <h1>BEM-VINDO</h1>
          <p>Faça seu cadastro para utilizar o sistema</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} >
          <h1>CADASTRO</h1>
          <div className='nome_form'>
            <input type="text" name='name' placeholder='Nome' />
            <input type="email" name='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="email" name='email' placeholder='Confirmar E-mail' value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}/>
          </div>
            <div className='doisxdois'>
            <input type="password" name='password' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <input type="password" name='password' placeholder='Confirmar senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>
          <button type='button' className='button-37' onClick={handleCadastro}>Cadastrar</button>

          <p>Já tem conta? <Link to="/">Entre aqui</Link></p>
        </form>

      </div>

    )
}
export default Cadastro