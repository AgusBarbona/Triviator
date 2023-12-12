import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [user, setUser] = useState({ avatar: 'default-avatar.png', username: 'Usuario' });
  const navigate = useNavigate(); // Hook para la navegación

  useEffect(() => {

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch('/api/user-info', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Error al obtener los datos del usuario');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  // Funciones para manejar la navegación
  const goToPlay = () => {
    navigate('/RuletaCategoria'); // Redirige al componente RuletaCategoria
    setIsDropdownVisible(false); 
  };

  const goToAvatar = () => {
    navigate('/Avatar'); // Redirige al componente Avatar
    setIsDropdownVisible(false); 
  };

  const goToAbout = () => {
    navigate('/AboutUs'); // Redirige al componente Sobre Nosotros
    setIsDropdownVisible(false); 
  };

  return (
    <header className="site-header">
      <div className="header-content">
        <h1>TRIVIATOR</h1>
        <button onClick={toggleDropdown} className="menu-icon">
          
        </button>
      </div>
      {isDropdownVisible && (
        <div className="dropdown-menu visible">
          <button onClick={toggleDropdown} className="close-icon">X</button>
          <div className="user-info">
            <img src={'../../../public/avatares/pirataa.png'|| user.avatar} alt="User Avatar" />
            <span>{"agus13" ||user.username}</span>
          </div>
          <nav>
            <button onClick={goToPlay} className="nav-button">Jugar</button>
            <button onClick={goToAvatar} className="nav-button">Avatar</button>
            <button onClick={goToAbout} className="nav-button">Sobre Nosotros</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
