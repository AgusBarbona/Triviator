import React from 'react';
import "./_juego.scss";

interface QuestionBoxProps {
    question: string;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ question }) => {
    return <div className='question-box'>{question}</div>;
};

export default QuestionBox;