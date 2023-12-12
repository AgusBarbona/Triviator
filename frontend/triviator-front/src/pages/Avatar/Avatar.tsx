import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Avatar/Avatar.scss';
import Header from '../../components/header/Header';
import { PropagateLoader } from 'react-spinners';

const Avatar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

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
      return;
    }

    try {
      const response = await fetch('/api/actualizar-avatar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ avatar: selectedAvatar, username })
      });

      if (response.ok) {
        navigate('/RuletaCategoria', { state: { avatar: selectedAvatar } });
      } else {
        navigate('/RuletaCategoria');
      }
    } catch (error) {
      alert('Error al enviar la solicitud');
      console.error('Error al enviar la solicitud', error);
    }
  };

  return (
    <div>
      <Header /> 
      {loading ? (
        <div className="loading-spinner">
          <div style={{ 
            backgroundColor: "white", 
            position: "fixed", 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center"
          }}>
            <PropagateLoader color={"#36D7B7"} />
          </div>
        </div>
      ) : (
        <div className="avatar-wrapper">
          <img
            src="/recursos/celebrando-removebg-preview (1).png"
            alt="Popcorn Character"
            className="popcorn-image"
          />
          
          <div className="avatar-subtitle">¿Cómo Te Querés Ver?</div>
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
      )}
    </div>
  );
};

export default Avatar;
