import React from 'react'
import Temporizador from '../../components/temporizador/temporizador.tsx'
import { Juego } from '../../components/juego/Juego.tsx'
import Header from '../../components/header/Header.tsx';
import "../../components/juego/_juego.scss";


const PaginaJuego: React.FC = () => {
    return(
        <div>
       <Header />
       <Temporizador />
       <Juego />
        </div>
    );
};

export default PaginaJuego;
