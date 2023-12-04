import React from 'react';
import './_juego.scss';


interface OptionBoxProps {
  option: string;
  handleOptionClick: (option?: string) => void;
  isCorrect: boolean;
  showColors: boolean;
}

const OptionBox: React.FC<OptionBoxProps> = ({ option, handleOptionClick, isCorrect, showColors }) => {
  const handleClick = () => {
    handleOptionClick(option);
  };

  const getColorClass = () => {
    if (showColors) {
      return isCorrect ? 'correct' : 'incorrect';
    }
    return ''; 
  };

  return (
    <div className={`option-box ${getColorClass()}`} onClick={handleClick}>
      {option}
    </div>
  );
};

export default OptionBox;