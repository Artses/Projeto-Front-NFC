import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import View from './pages/view/View';
import ProtectedRoute from './autenticacao_rotas';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/Cadastro',
    element: <Cadastro />,
  },
  {
    path: '/Home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/View',
    element: (
      <ProtectedRoute>
        <View />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
