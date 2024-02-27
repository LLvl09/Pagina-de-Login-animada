// App.tsx
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import './App.css'

const App: React.FC = () => {
  useEffect(() => {
    alert('Veja o console para pegar as informações de login :)');
  }, []);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    // Lógica para autenticar o usuário
    // Pode ser usado para redirecionar para a página principal, definir um token de autenticação, etc.
    setLoggedIn(true);
    console.log(`Usuário ${username} autenticado com sucesso.`);
  };

  return (
    <div>
      {loggedIn ? (
        <h1>Bem-vindo!</h1>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
