import React from 'react'
import ReactDOM from 'react-dom/client'
import Temporizador from './components/temporizador/temporizador.tsx'
import { Juego } from './components/juego/Juego.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Temporizador />
    <Juego />
  </React.StrictMode>,
)
