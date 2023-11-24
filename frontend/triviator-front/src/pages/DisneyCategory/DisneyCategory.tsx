import Header from '../../components/header/Header'; 
import '../../pages/DisneyCategory/disneycategory.scss';


const  DisneyCategory = () => {
    return (
      <div>
       <Header />
       <div className="disney-container">
          <div className="disney-rectangle">
            <div className="disney-text"> CATEGORIA: DISNEY</div>
            <img src="../../public/recursos/celebrando-removebg-preview (1).png" alt="Popcorn Character" className="category-popcorn" />
            <button className="button-play">JUGAR</button>
            </div>
            </div>
      </div>
    );
}
export default DisneyCategory;