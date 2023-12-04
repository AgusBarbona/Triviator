import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Avatar/Avatar.scss';

const Avatar: React.FC = () => {
  const [name, setName] = useState('');
  const characterLimit = 22; 
  const navigate = useNavigate(); 
  const [error, setError] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue.length <= characterLimit) {
      setName(newValue);
      
      setError('');
    }
  };

  const handleButtonClick = () => {
    if (name.length < 3) {
      setError('El nombre debe tener al menos 3 caracteres');
    } else {
      navigate('/RuletaCategoria'); 
    }
  };

  return (
    <div className="avatar-wrapper">
      <div className="avatar-header">Bienvenid@ a Triviator</div>
      <div className="popcorn">
        <img
          src="../../public/recursos/celebrando-removebg-preview (1).png"
          alt="Popcorn Character"
          className="popcorn-image"
        />
      </div>
      <div className="avatar-subtitle">¿Cómo te quieres llamar?</div>
      <div className="avatar-content">
        <div className="avatar-name-input">
          <input
            type="text"
            placeholder="Tu nombre aquí"
            value={name}
            onChange={handleNameChange}
          />
          <div className="character-count">
            {name.length}/{characterLimit}
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="ready-button" onClick={handleButtonClick}>
          Listo
        </button>
      </div>
    </div>
  );
};

export default Avatar;
