import React from 'react';
import "./_juego.scss";

interface OptionBoxProps {
    option: string;
    handleOptionClick: (option?: string) => void;
}

const OptionBox: React.FC<OptionBoxProps> = ({ option, handleOptionClick }) => {
    const handleClick = () => {
        handleOptionClick(option);
      };

    return (
    <div className='option-box' onClick={handleClick}>{option}</div> 
    );
};

export default OptionBox;