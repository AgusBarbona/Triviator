/*
fondo: #C5F4A8
cuadrado: #F37474
font-family: 'Merriweather Sans', sans-serif;
*/  

import Header from '../../components/header/Header';
import Buttons from '../../components/buttons/buttons';
import '../LoserPage/loser.scss'; 

const LoserPage = () => {
      return (
        <div>
         <Header />
          <div className="loser-container">
          <div className="loser-rectangle">
            <div className="text">¡No pasa nada! La práctica hace al maestro</div>
            <img src="../../public/recursos/triste-removebg-preview.png" alt="Popcorn Character" className="sad-popcorn" />
            <Buttons /> 
          </div>
        </div>
        </div>
      );
}
export default LoserPage;
  
  