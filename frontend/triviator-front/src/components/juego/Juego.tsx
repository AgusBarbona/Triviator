import "./_juego.scss";
import QuestionBox from "./QuestionBox";
import OptionBox from "./OptionBox";
import { useEffect, useState } from "react";


interface JuegoProps {}

export const Juego: React.FC<JuegoProps> = () => {

    const [pregunta, setPregunta] = useState('');
    const [opciones, setOpciones] = useState<string[]>([]);
  
    useEffect(() => {
      // Lógica para obtener la pregunta y opciones desde el servidor
      const fetchData = async () => {
        try {
          const response = await fetch('/api/obtener-pregunta-aleatoria');
          const data = await response.json();
          setPregunta(data.pregunta);
          setOpciones(data.opciones);
        } catch (error) {
          console.error('Error al obtener la pregunta:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="juego-container">
        <QuestionBox question={pregunta} />
        <div className="options-container">
          {opciones.map((opcion, index) => (
            <OptionBox key={index} option={opcion} />
          ))}
        </div>
      </div>
    );
  };
 