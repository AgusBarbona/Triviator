import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Avatar/Avatar.scss';

const Avatar: React.FC = () => {
  const navigate = useNavigate(); 
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  const avatars = [
    { name: 'Elfo', image: 'avatares/elfo.png' },
    { name: 'Mago', image: 'avatares/magical.png' },
    { name: 'Pirata', image: 'avatares/pirataa.png' },
    { name: 'Superheroe', image: 'avatares/super.png' },
  ];

  const handleAvatarClick = (avatarName: string) => {
    setSelectedAvatar(avatarName);
  };

  const handleButtonClick = () => {
    if (!selectedAvatar) {
      alert('Por favor, selecciona un avatar');
    } else {
      // Suponiendo que quieres pasar el avatar seleccionado a la siguiente página
      navigate('/RuletaCategoria', { state: { avatar: selectedAvatar } }); 
    }
  };

  return (
    <div className="avatar-wrapper">
      <div className="avatar-header">Bienvenid@ a Triviator</div>
      <img
          src="../../public/recursos/celebrando-removebg-preview (1).png"
          alt="Popcorn Character"
          className="popcorn-image"
        />
        <div className="avatar-subtitle">¿Cómo te quieres llamar?</div>
      <div className="avatar-selection">
        {avatars.map((avatar, index) => (
          <div key={index} className={`avatar-option ${selectedAvatar === avatar.name ? 'selected' : ''}`} onClick={() => handleAvatarClick(avatar.name)}>
            <img src={avatar.image} alt={avatar.name} />
            <div>{avatar.name}</div>
          </div>
        ))}
      </div>
      <button className="ready-button" onClick={handleButtonClick}>
        Listo
      </button>
    </div>
  );
};

export default Avatar;
