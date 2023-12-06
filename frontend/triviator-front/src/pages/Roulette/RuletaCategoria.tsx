import { Ruleta } from "../../components/ruleta/ruleta";
import Header from "../../components/header/Header";
import Sorprendido from "../../../public/recursos/sorprendido.png";
import "../Roulette/_roulette_category.scss";
import Group from "../../../public/recursos/Group.png";
import  Wave  from "../../../public/recursos/wave.svg";
import { useState , useEffect } from "react";
import { PropagateLoader } from "react-spinners";

export const RuletaCategoria = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])

  return (
    <div>
      <Header />
      {loading ? (
        <div className="loading-spinner">
          <PropagateLoader color={"#36D7B7"} style={{ width: "150px", height: "150px", margin: "auto" }} />
        </div>
      ) : (
      <div className="Categoria">
      <img src={ Wave } className="ondas"/>
        <div className="ruleta-container">
          <Ruleta />
          <img src={ Sorprendido } alt="popcorn-sorprendido" className="sorprendido"/>
          <img src={Group} className="group"/>

        </div>
      </div>
        )}
    </div>
  );
};
