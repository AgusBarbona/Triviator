/*
 fondo: #F8FF95
 cuadrado verde: #B1F389
 font-family: 'Merriweather Sans', sans-serif;
*/

import Header from '../../components/header/Header';
import Buttons from '../../components/buttons/buttons';
import '../../pages/WinnerPage/winner.scss';

const  WinnerPage = () => {
      return (
        <div>
         <Header />
          <div className="winner-container">
          <div className="winner-rectangle">
            <div className="text">¡FELICITACIONES , GANASTE!</div>
            <img src="../../public/recursos/emocionado-removebg-preview.png" alt="Popcorn Character" className="happy-popcorn" />
            <Buttons />
          </div>
        </div>
        </div>
      );
}
export default WinnerPage;
  
  