import "./_juego.scss";
import QuestionBox from "./QuestionBox";
import OptionBox from "./OptionBox";

export const Juego = () => {
 
    return(

     <div className="juego-container">
        <QuestionBox question="¿Pregunta de la trivia?" />
        <div className="options-container">
            <OptionBox option="Opción 1" />
            <OptionBox option="Opción 2" />
            <OptionBox option="Opción 3" />
            <OptionBox option="Opción 4" />
        </div>
     </div>

    );

     

 };

 