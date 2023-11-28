import "./_juego.scss";
import QuestionBox from "./QuestionBox";
import OptionBox from "./OptionBox";
import { useEffect, useState } from "react";


interface JuegoProps {}

export const Juego: React.FC<JuegoProps> = () => {

    const [pregunta, setPregunta] = useState('');
    const [opciones, setOpciones] = useState<string[]>([]);
    const [preguntasRespondidas, setPreguntasRespondidas] = useState(0);
    const MAX_PREGUNTAS = 10;
    
    const handleOptionClick = (opcion?: string) => {
        // Agregar lógica de verificación de respuesta aquí si es necesario
        // Por ahora, solo se avanza a la siguiente pregunta
        if (opcion) {
          // Lógica de verificación de respuesta aquí
        }
        setPreguntasRespondidas(preguntasRespondidas + 1);
    };

    useEffect(() => {
      // Lógica para obtener la pregunta y opciones desde el servidor
      const fetchData = async () => {
        try {
         if (preguntasRespondidas < MAX_PREGUNTAS) {
          const response = await fetch('/api/obtener-pregunta-aleatoria');
          const data = await response.json();
          setPregunta(data.pregunta);
          setOpciones(data.opciones);
          
         } else {
            console.log('Fin del juego')
         }
        } catch (error) {
          console.error('Error al obtener la pregunta:', error);
        }
      };
  
      fetchData();
    }, [preguntasRespondidas]);
  
    return (
      <div className="juego-container">
        <QuestionBox question={pregunta} />
        <div className="options-container">
          {opciones.map((opcion, index) => (
            <OptionBox key={index} option={opcion} handleOptionClick={() => handleOptionClick(opcion)} />
          ))}
        </div>
      </div>
    );
  };
 