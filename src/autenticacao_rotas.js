import { Navigate } from 'react-router-dom';

// Componente de Rota Protegida
const ProtectedRoute = ({ children }) => {
const token = localStorage.getItem('authToken'); // Verifica se o token existe
console.log('Token:', token);

  if (!token) {
    console.log('Nenhum token encontrado, redirecionando para a página de login.');
    // Se o token não existir, redireciona para a página de login
    return <Navigate to="/" replace />
  }

  console.log('Token encontrado, permitindo acesso à rota.');
  // Se o token existir, permite acesso à rota
  return children;
};

export default ProtectedRoute;
