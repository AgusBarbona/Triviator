import React, { useEffect, useState } from "react";
import "./_juego.scss";
import QuestionBox from "./QuestionBox";
import OptionBox from "./OptionBox";

interface JuegoProps {}

export const Juego: React.FC<JuegoProps> = () => {
  const [pregunta, setPregunta] = useState('');
  const [opciones, setOpciones] = useState<string[]>([]);
  const [seleccionRealizada, setSeleccionRealizada] = useState(false);
  const [preguntasRespondidas, setPreguntasRespondidas] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [idPregunta, setIdPregunta] = useState<number>(0);
  const MAX_PREGUNTAS = 10;

  const fetchData = async () => {
    if (preguntasRespondidas < MAX_PREGUNTAS) {
      const response = await fetch('/api/obtener-pregunta-aleatoria');
      if (!response.ok) {
        throw new Error('Error al obtener pregunta aleatoria');
      }
      const data = await response.json();
      setIdPregunta(data.id_pregunta);
      setPregunta(data.pregunta);
      setOpciones(data.opciones);
    } else {
      console.log('Fin del juego');
    }
  };

  const handleOptionClick = async (opcion?: string) => {
    if (opcion && !seleccionRealizada) {
      const response = await fetch("/api/verificar-respuesta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idPregunta,
          opcionSeleccionada: opcion,
        }),
      });

      const data = await response.json();

      if (response.ok && data.esCorrecta) {
        setPuntuacion(prevPuntuacion => prevPuntuacion + 10);
      }

      setSeleccionRealizada(true);
      setTimeout(() => {
        setPreguntasRespondidas(prevPreguntas => prevPreguntas + 1);
        setSeleccionRealizada(false);
        fetchData();
      }, 2000);
    }
  };

  useEffect(() => {
    fetchData();
  }, [preguntasRespondidas]);

  return (
    <div className="juego-container">
      <QuestionBox question={pregunta} />
      <div className="options-container">
        {opciones.map((opcion, index) => (
          <OptionBox
            key={index}
            option={opcion}
            handleOptionClick={() => handleOptionClick(opcion)}
            showColors={seleccionRealizada} // Eliminé la línea isCorrect, no es necesaria aquí
          />
        ))}
      </div>
      <div className="puntuacion-container">
        <p>Puntuación: {puntuacion}</p>
      </div>
    </div>
  );
};

export default Juego;
