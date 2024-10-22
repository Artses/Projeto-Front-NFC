import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';  // Importa a biblioteca de cookies

// Componente de Rota Protegida
const ProtectedRoute = ({ children }) => {
  const token = Cookies.get('jwt');  // Obtém o token do cookie
  console.log(Response.Data);
  

  if (!token) {
    console.log('Nenhum token válido encontrado, redirecionando para a página de login.');
    return <Navigate to="/" replace />;
  }

  console.log('Token encontrado, permitindo acesso à rota.');
  return children;  // Permite o acesso à rota
};

export default ProtectedRoute;
