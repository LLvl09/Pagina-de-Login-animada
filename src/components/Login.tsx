// Login.tsx
import { config } from 'process';
import React, { useState, useRef } from 'react';
import { USERNAME, PASSWORD } from '../config/config';
import '../css/Login.css';


interface LoginProps {
  onLogin: (user: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [user, setUser]= useState('');
  const [password, setPassword] = useState('');
  console.log('NOME DE USUARIO: llvl09 ||| SENHA: 12345678');
    const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (event.currentTarget === usernameRef.current) {
        // Mover o foco para o campo de senha
        passwordRef.current?.focus();
      } else if (event.currentTarget === passwordRef.current) {
        // Executar a lógica de envio (substitua com sua lógica real)
        handleLogin();
      }
    }
  };
  const handleLogin = () => {
    // Lógica de autenticação
    if (user === USERNAME && password === PASSWORD) {
      onLogin(user, password);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };
  
 
  
  return (
    
    
    <div className='main-principal'>
      
      <h2 id='title-principal'>Login</h2>
      <div className='campo-principal'>
        <input
            type="text"
            id="inputs"
            value={user}
            ref={usernameRef}
            onKeyDown={handleKeyDown}
            placeholder='Username'
            onChange={(e) => setUser(e.target.value)
            }
        />
      </div>
      <div className='campo-principal'>
        <input
          type="password"
          id="inputs"
          value={password}
          ref={passwordRef}
          onKeyDown={handleKeyDown}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button id= 'button-entrar'onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
