import React from 'react';
import "./_juego.scss";

interface OptionBoxProps {
    option: string;
}

const OptionBox: React.FC<OptionBoxProps> = ({ option }) => {
    return <div className='option-box'>{option}</div>;
};

export default OptionBox;