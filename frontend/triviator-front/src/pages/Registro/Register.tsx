import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const navigate = useNavigate();


  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!username || !email || !password) {
      setError('Por favor ingrese un usuario, email y contraseña válidos.');
      return;
    }

    try {
      const response = await fetch('/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        console.log('Registro exitoso');
        setError('');

        // Redirigir al usuario a la página de avatares
        navigate('/avatar');
        console.log('Redirigido a Avatar');
      } else {
        const data = await response.json();
        setError(data.mensaje);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setError('Error al comunicarse con el servidor');
    }
  };

  return (
    <div className="register-page"> {/* Cambio de "login-page" a "register-page" */}
      <div className="register-container"> {/* Cambio de "login-container" a "register-container" */}
        <div className="register-side"> {/* Cambio de "login-side" a "register-side" */}
          <h1 className="brand-title">Triviator</h1>
          <p className="welcome-message">Bienvenid@ Cinéfilo</p>
          {/* Agregar una imagen aquí */}
          <img src="../../public/recursos/emocionadosinfondo.png" alt="Popcorn Character" className="popcorn-image" />
        </div>
        <form className="register-form" onSubmit={handleSubmit}> {/* Cambio de "login-form" a "register-form" */}
          <div className="welcome-title-container">
            <p className="para-jugar">Regístrate para Jugar</p>
          </div>
          <div className="form-group">
          <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                placeholder="Ingrese su nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese su Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" className="register-button"> {/* Cambio de "login-button" a "register-button" */}
            Registrarse
          </button>
          <Link to="/" className="login-link">¿Ya tenés una cuenta? Inicia Sesión</Link>

        </form>
      </div>
    </div>
  );
};

export default Register;
