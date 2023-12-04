import { Link } from 'react-router-dom';
import '../../styles/buttons.scss';

const Buttons = () => {
  return (
    <div className="buttons-container">
      <Link to="/RuletaCategoria" className="button button-1">
        Volver a jugar
      </Link>
      <Link to="#" className="button button-2">
        Ver puntajes
      </Link>
    </div>
  );
};

export default Buttons;