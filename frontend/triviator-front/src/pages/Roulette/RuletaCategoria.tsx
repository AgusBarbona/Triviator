import { Ruleta } from "../../components/ruleta/ruleta";
import Header from "../../components/header/Header";
import Sorprendido from "../../../public/recursos/sorprendido.png";
import "../Roulette/_roulette_category.scss";
import Group from "../../../public/recursos/Group.png";
//import { useState , useEffect } from "react";
//import { PropagateLoader } from "react-spinners";


export const RuletaCategoria = () => {
 /* const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])*/

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
