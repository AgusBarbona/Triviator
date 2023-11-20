import React, { useState, FormEvent } from 'react';
import '../styles/LoginPage.scss';


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validUsername = 'usuario_correcto';
  const validPassword = 'contraseña_segura';

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Por favor ingrese un usuario y contraseña válidos.');
      return;
    }

    if (username === validUsername && password === validPassword) {
      console.log('Autenticación exitosa');
      setError('');

    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };
  return (
    <div className="login-page">
    <div className="login-container">
      <div className="login-side">
      <h1 className="brand-title">Triviator</h1>
      <p className="welcome-message">Bienvenid@ Cinéfilo</p>
        <img src="../../public/recursos/png.png" alt="Popcorn Character" className="popcorn-image" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="welcome-title-container">
          <p className='para-jugar'>Inicia Sesión para empezar a jugar</p>
        </div>
          <div className="form-group">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              placeholder="Ingrese su Email de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              placeholder="Ingrese su Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

