import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Avatar/Avatar.scss';

const Avatar = () => {
  const navigate = useNavigate(); 
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  const avatars = [
    { name: 'Elfo', image: '/avatares/elfo.png' },
    { name: 'Mago', image: '/avatares/magical.png' },
    { name: 'Pirata', image: '/avatares/pirataa.png' },
    { name: 'Superhéroe', image: '/avatares/super.png' },
  ];

  const handleAvatarClick = (image: string) => {
    setSelectedAvatar(image);
  };

  const handleButtonClick = async () => {
    if (!selectedAvatar) {
      alert('Por favor, selecciona un avatar');
    } else {
      try {
        const response = await fetch('/api/actualizar-avatar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ avatar: selectedAvatar }),
        });

        if (response.ok) {
          navigate('/RuletaCategoria', { state: { avatar: selectedAvatar } });
        } else {
          alert('Error al actualizar el avatar');
        }
      } catch (error) {
        alert('Error al enviar la solicitud');
        console.error('Error al enviar la solicitud', error);
      }
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
          <div key={index} className={`avatar-option ${selectedAvatar === avatar.image ? 'selected' : ''}`} onClick={() => handleAvatarClick(avatar.image)}>
            <img src={avatar.image} alt={avatar.name} />
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
