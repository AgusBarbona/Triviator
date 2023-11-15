import React from 'react'
import Temporizador from '../components/temporizador/Temporizador.tsx'
import { Juego } from '../components/juego/Juego.tsx'


const PaginaJuego: React.FC = () => {
    return(
        <div>
       <Temporizador />
       <Juego />
        </div>
    );
};

export default PaginaJuego;
