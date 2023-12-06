import { Ruleta } from "../../components/ruleta/ruleta";
import Header from "../../components/header/Header";
import Sorprendido from "../../../public/recursos/sorprendido.png";
import "../Roulette/_roulette_category.scss";
import Group from "../../../public/recursos/Group.png";

export const RuletaCategoria = () => {
  return (
    <div className="Categoria">
      <div className="background">
        <Header />
        <div className="ruleta-container">
          <Ruleta />
          <img
            src={Sorprendido}
            alt="popcorn-sorprendido"
            className="sorprendido"
          />
          <img src={Group} className="group" />
        </div>

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
