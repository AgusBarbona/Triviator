import "./_juego.scss";
import QuestionBox from "./QuestionBox";
import OptionBox from "./OptionBox";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface JuegoProps {}

export const Juego: React.FC<JuegoProps> = () => {
  const [respuestaCorrectaDelServidor, setRespuestaCorrectaDelServidor] = useState<string>('');
  const [pregunta, setPregunta] = useState('');
  const [opciones, setOpciones] = useState<string[]>([]);
  const [urlImagen, setUrlImagen] = useState<string>('');
  const [seleccionRealizada, setSeleccionRealizada] = useState(false);
  const [preguntasRespondidas, setPreguntasRespondidas] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [idPregunta, setIdPregunta] = useState<number>(0);
  const navigate = useNavigate();
  const MAX_PREGUNTAS = 9;

  const fetchData = async () => {
    try {
      if (preguntasRespondidas < MAX_PREGUNTAS) {
        const response = await fetch('/api/obtener-pregunta-aleatoria');
        if (!response.ok) {
            throw new Error('Error al obtener pregunta aleatoria');
        }
        console.log(response); 
        const data = await response.json();
        console.log('Datos recibidos del servidor:', data);
        setIdPregunta(data.id_pregunta);
        setPregunta(data.pregunta);
        setOpciones(data.opciones);
        setRespuestaCorrectaDelServidor(data.respuestaCorrecta);
        setUrlImagen(data.urlImagen);
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
      console.log(response);
        const data = await response.json();
      console.log(data);
        if (response.ok) {
          console.log(data.mensaje);
          if (data.mensaje.includes('incorrecta')) {
            setPuntuacion((prevPuntuacion) => prevPuntuacion + 10);
            console.log(puntuacion);
          }
        } else {
          console.error(data.mensaje);
        }

        setSeleccionRealizada(true);

        /* 

        Calculo de porcentaje ganador o perdedor 
        
        */
       
        setTimeout(() => {
          setPreguntasRespondidas((prevPreguntas) => prevPreguntas + 1);
          setSeleccionRealizada(false);

          // Verificar si se alcanzo el 70% de respuestas correctas
          const porcentajeCorrectas = (puntuacion / MAX_PREGUNTAS / 10) * 100;

          if (porcentajeCorrectas >= 70) {
            navigate('/winner');
          } else if (preguntasRespondidas >= MAX_PREGUNTAS) {
            navigate('/loser');
          }

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
      
      <QuestionBox question={pregunta} urlImagen={urlImagen} />
      
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