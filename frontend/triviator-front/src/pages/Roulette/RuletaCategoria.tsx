import { Ruleta } from "../../components/ruleta/ruleta";
import Header from "../../components/header/Header";
import Sorprendido from "../../../public/recursos/sorprendido.png";
import "../Roulette/_roulette_category.scss";
import Group from "../../../public/recursos/Group.png"


export const RuletaCategoria = () => {
  return (
    <div>
      <Header />
      <div className="Categoria">
      
        <div className="ruleta-container">
          <Ruleta />
          <img src={ Sorprendido } alt="popcorn-sorprendido" className="sorprendido"/>
          <img src={Group} className="group"/>
          </div>
        </div>
      </div>
      
    
  );
};
