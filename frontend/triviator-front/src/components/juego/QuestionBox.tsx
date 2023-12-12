import React from 'react';

interface QuestionBoxProps {
  question: string;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ question }) => {
  return (
    <div className="question-box">
      <div className="question-overlay"></div> {/* Caja transparente con líneas punteadas */}
      <p className="question-text">{question}</p> {/* Letras dentro del .question-box */}
    </div>
  );
};

export default QuestionBox;