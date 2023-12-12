import React from 'react';

interface QuestionBoxProps {
  question: string;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ question }) => {
  return (
    <div className="question-box">
      <div className="question-overlay"></div> 
      <p className="question-text">{question}</p> 
    </div>
  );
};

export default QuestionBox;