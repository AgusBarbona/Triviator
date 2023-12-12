import React, { useState, useEffect } from 'react';
import './aboutUs.scss';
import Header from '../../components/header/Header';
import { PropagateLoader } from 'react-spinners';

interface FlipCardProps {
  frontContent: JSX.Element;
  backContent: JSX.Element;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">
          {frontContent}
        </div>
        <div className="card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

const AboutUs: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
   
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />
      <div className='about-page'>
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
        <div>
          <div className='welcome'> 
            <h2>¡Bienvenid@ a Triviator! <br/>
            Diviértete y pon a prueba tus conocimientos cinematográficos.</h2>
          </div>
          <div className="card-container">
            <FlipCard 
              frontContent={<div>Quienes somos</div>}
              backContent={<div>Somos un apasionado equipo de chicas, cineastas de corazón, que decidieron unir  
                fuerzas y crear este emocionante proyecto: ¡Triviator!<br/>
                Este es un equipo diverso de mentes creativas, cada una aportando su propia chispa única al proyecto. 
                Nos emociona la idea de que, a través de nuestras trivias, puedas descubrir nuevas películas, aprender hechos fascinantes y, sobre todo, disfrutar de la experiencia cinematográfica tanto como nosotras.
              </div>}
            />
            <FlipCard 
              frontContent={<div>Misión</div>}
              backContent={<div>Facilitar a los amantes del cine la experiencia de explorar y disfrutar del séptimo arte a través de desafíos divertidos. Buscamos estimular el conocimiento cinematográfico, fomentar la diversión y el aprendizaje a través de trivias, proporcionando a nuestros usuarios un espacio interactivo para poner a prueba sus conocimientos sobre películas y descubrir curiosidades del mundo cinematográfico.
              </div>}
            />
            <FlipCard 
              frontContent={<div>Unite a nuestro Equipo</div>}
              backContent={<div>En Triviator, creemos en la magia de las historias que solo el cine puede contar. Queremos que te sumes a este mundo y que cada trivia sea un viaje emocionante lleno de diversión. ¡Acompañanos en este viaje y descubre cuánto amor y dedicación hemos puesto a este proyecto!
              </div>}
            />
          </div>
          <div className='love'>
            <p> Con amor cinematográfico,<br/>
               El Equipo de Triviator  🎬🍿</p>
          </div>
          <div className="footer-icons">
            <a href="https://github.com/AgusBarbona/Triviator" target="_blank" rel="noopener noreferrer">
              <img src="../../../../public/icono/github.png" alt="Github" />
            </a>
            <a href="https://www.figma.com/file/xggqxThDKZwuM4TwSrZNCs/triviator?type=design&node-id=159%3A2&mode=design&t=N79kQousGU6orwBK-1" target="_blank" rel="noopener noreferrer">
              <img src="../../../../public/icono/figma.png" alt="Figma" />
            </a>
</div>
        </div>
      )}
    </div>
    </div>
  );
};

export default AboutUs;
