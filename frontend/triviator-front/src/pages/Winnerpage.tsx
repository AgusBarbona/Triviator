/*
 fondo: #F8FF95
 cuadrado verde: #B1F389
 font-family: 'Merriweather Sans', sans-serif;
*/


import Header from '../components/Header';
import Buttons from '../components/buttons';
import '../styles/winner.scss'; 

const WinnerPage = () => {
  return (
    <div>
      <Header />
      <div className="winner-container">
      <div className="winner-rectangle">
        <div className="text">FELICITACIONES GANASTE!!! 😊</div>
        <Buttons />
      </div>
    </div>
    </div>
  );
}

export default WinnerPage;