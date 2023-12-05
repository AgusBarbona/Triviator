import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Login/LoginPage.scss';


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();


  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Por favor ingrese un usaurio y contraseña válidos.');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Autenticación exitosa');
        setError('');

        // redirigir al usaurio a la página principal
        navigate('/RuletaCategoria');
        console.log('Redirigido a RuletaCategotia');

      } else {
        const data = await response.json();
        setError(data.mensaje);
      }
    } catch (error) {
      console.error('Error al autenticar usuario:', error);
      setError('Error al comunicarse con el servidor');
      console.error('Error al redirigir:', error);
    }
  };
  /*const validUsername = 'usuario_correcto';
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
  };*/
  return (
    <div className="login-page">
    <div className="login-container">
      <div className="login-side">
      <h1 className="brand-title">Triviator</h1>
      <p className="welcome-message">Bienvenid@ de nuevo Triviarcito</p>
        <img src="../../public/recursos/png.png" alt="Popcorn Character" className="popcorn-image" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="welcome-title-container">
          <p className='para-jugar'>Inicia Sesión para empezar a jugar</p>
        </div>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              placeholder="Ingrese su Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
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
          <Link to="/register" className="login-link">¿No sos un Triviarcito? Registrate</Link>

        </form>
      </div>
    </div>
  );
};

export default Login;

