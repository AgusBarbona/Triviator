// Temporizador.tsx
import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";
import "./styles.css";

interface TimeProps {
  remainingTime: number;
}

const RenderTime: React.FC<TimeProps> = ({ remainingTime }) => {
  const currentTime = useRef<number>(remainingTime);
  const prevTime = useRef<number | null>(null);
  const isNewTimeFirstTick = useRef<boolean>(false);
  const [, setOneLastRerender] = useState<number>(0);
  const navigate = useNavigate(); // Utilizando useNavigate

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
      // Redirigir a la página deseada cuando el tiempo llegue a cero
      navigate("/loser");
    }, 10);
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

const Temporizador: React.FC = () => {
  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={60}
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

export default Temporizador;
