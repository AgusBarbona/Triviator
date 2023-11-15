/*
fondo: #C5F4A8
cuadrado: #F37474
font-family: 'Merriweather Sans', sans-serif;
*/  

import Header from '../components/Header';
import Buttons from '../components/buttons';
import '../styles/loser.scss'; 

const LoserPage = () => {
      return (
        <div>
         <Header />
          <div className="loser-container">
          <div className="loser-rectangle">
            <div className="text"> Perdiste ☹️</div>
            <Buttons /> 
          </div>
        </div>
        </div>
      );
}
export default LoserPage;
  
  