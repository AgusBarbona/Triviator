import "./_juego.scss";
import QuestionBox from "./QuestionBox";
import OptionBox from "./OptionBox";
import { useEffect, useState } from "react";


interface JuegoProps {}

export const Juego: React.FC<JuegoProps> = () => {
  const [respuestaCorrectaDelServidor, setRespuestaCorrectaDelServidor] = useState<string>('');
  const [pregunta, setPregunta] = useState('');
  const [opciones, setOpciones] = useState<string[]>([]);
  const [seleccionRealizada, setSeleccionRealizada] = useState(false);
  const [preguntasRespondidas, setPreguntasRespondidas] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [idPregunta, setIdPregunta] = useState<number>(0);
  const MAX_PREGUNTAS = 10;

  const fetchData = async () => {
    try {
      if (preguntasRespondidas < MAX_PREGUNTAS) {
        const response = await fetch('/api/obtener-pregunta-aleatoria');
        if (!response.ok) {
            throw new Error('Error al obtener pregunta aleatoria');
        }

        const data = await response.json();
        setIdPregunta(data.id_pregunta);
        setPregunta(data.pregunta);
        setOpciones(data.opciones);
        setRespuestaCorrectaDelServidor(data.respuestaCorrecta);
      } else {
        console.log('Fin del juego');
      }
    } catch (error) {
      console.error('Error al obtener la pregunta:', error);
    }
  };

  const handleOptionClick = async (opcion?: string) => {
    try {
      if (opcion) {
        const response = await fetch("/api/verificar-respuesta", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idPregunta, // Envía el ID de la pregunta
            opcionSeleccionada: opcion,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log(data.mensaje);
          if (data.mensaje.includes('correcta')) {
            setPuntuacion((prevPuntuacion) => prevPuntuacion);
          }
        } else {
          console.error(data.mensaje);
        }

        setSeleccionRealizada(true);
        setTimeout(() => {
          setPreguntasRespondidas((prevPreguntas) => prevPreguntas + 1);
          setSeleccionRealizada(false); 
          fetchData(); 
        }, 2000); 
      }
    } catch (error) {
      console.error("Error al procesar la respuesta:", error);
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
            isCorrect={opcion === respuestaCorrectaDelServidor}
            showColors={seleccionRealizada}
          />
        ))}
      </div>
      <div className="puntuacion-container">
      <p>Puntuación: {puntuacion}</p>
      </div>
    </div>
  );
};