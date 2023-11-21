import React from 'react'
import Temporizador from '../components/temporizador/temporizador.tsx'
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
