import React from 'react';

interface QuestionBoxProps {
  question: string;
  urlImagen: string;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ question, urlImagen }) => {
  console.log('URL de la imagen en QuestionBox.tsx:', urlImagen);
  return (
    <div className="question-box">
      <div className="question-overlay"></div> {/* Caja transparente con líneas punteadas */}
      <p className="question-text">{question}</p> {/* Letras dentro del .question-box */}
      {urlImagen && <div className="image-container"> <img src={urlImagen} alt="Imagen de la pregunta" className="question-image" /> </div>} {/* Muestra la imagen si hay una URL */}
    </div>
  );
};

export default QuestionBox;