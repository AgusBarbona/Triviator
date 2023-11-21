import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";



// Interfaz para las propiedades del tiempo
interface TimeProps {
  remainingTime: number;
}

// Componente funcional para renderizar el tiempo
const RenderTime: React.FC<TimeProps> = ({ remainingTime }) => {
  const currentTime = useRef<number>(remainingTime);
  const prevTime = useRef<number | null>(null);
  const isNewTimeFirstTick = useRef<boolean>(false);
  const [, setOneLastRerender] = useState<number>(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // Forzar un último re-render cuando el tiempo se acabe para activar la última animación
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? "down" : ""}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  );
};

// Componente principal App
const Temporizador : React.FC = () => {
  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={25}
          colors={["#66C15E", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          size={80}
          strokeWidth={7}
          
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

// Renderizar la aplicación en el elemento con el ID "root"
const rootElement: HTMLElement | null = document.getElementById("root");
ReactDOM.render(<Temporizador />, rootElement);


export default Temporizador; 



















// TimerComponent.ts
/*import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


 const TimerComponent: React.FC = () => {
    const [timerKey, setTimerKey] = useState<number>(0);

    const timerProps = {
        isPlaying: true, // Indica si el temporizador está en reproducción
        duration: 20, // Duración en segundos
        colors: [["#004777", 0.33], ["#F7B801", 0.33], ["#A30000", 0.33]], // Colores del temporizador en diferentes etapas
        size: 50, // Tamaño del temporizador
        strokeWidth: 6, // Ancho de la línea del temporizador
        trailColor: "#d6d6d6", // Color del rastro del temporizador
        strokeLinecap: "round", // Estilo del extremo de la línea
    };

    return (
        <div>
         const UrgeWithPleasureComponent = () => (
  <CountdownCircleTimer
    isPlaying
    duration={7}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
)
        </div>
    );
};

export default TimerComponent;*/
