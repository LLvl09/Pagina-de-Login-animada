// LoginPage.tsx
import React from 'react';
import Login from './Login';

const LoginPage: React.FC = () => {
  const handleLogin = (user: string, pass: string) => {
    // Aqui você pode implementar a lógica de autenticação
    console.log(`Usuário: ${user}, Senha: ${pass}`);
  };

  return (
    <div>
      <h1>Página de Login</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
