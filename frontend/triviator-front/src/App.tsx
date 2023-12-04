
import { BrowserRouter, Route, Routes} from 'react-router-dom'; 
import WinnerPage from './pages/WinnerPage/Winnerpage'; 
import LoserPage from './pages/LoserPage/Loserpage';
import Register from './pages/Registro/Register';
import LoginPage from './pages/Login/LoginPage';
import Avatar from './pages/Avatar/Avatar';
import PaginaJuego from './pages/GamePage/PaginaJuego';
import DisneyCategory from './pages/DisneyCategory/DisneyCategory';
import  {RuletaCategoria}  from './pages/Roulette/RuletaCategoria';
import { useState } from 'react';




function App() {
    const url = "/api";
    const [datav1, setDatav1] = useState<string | null>(null)

    function getDataFromServer() {
      fetch(url+"/v1")
      .then(response => response.json() )
      .then((data: {message: string}) => {
        console.log(data);
        setDatav1(data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/avatar/" element={< Avatar/>}/>
        <Route path="/winner/" element={< WinnerPage/>}/>
        <Route path="/loser/" element={<LoserPage/>}/>
        <Route path="/PaginaJuego/" element={<PaginaJuego/>}/>
        <Route path='/RuletaCategoria' element={<RuletaCategoria/>}/>
        <Route path='/disneycategory' element={<DisneyCategory/>}/>

      </Routes>
    </BrowserRouter> 
    </> 
    
  );
}

export default App;
