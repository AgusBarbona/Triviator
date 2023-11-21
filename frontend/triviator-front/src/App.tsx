
import { BrowserRouter, Route, Routes} from 'react-router-dom'; 
import WinnerPage from './pages/Winnerpage'; 
import LoserPage from './pages/Loserpage';
import LoginPage from './pages/LoginPage';
import Avatar from './pages/Avatar';
import PaginaJuego from './pages/PaginaJuego';
import DisneyCategory from './pages/disneyCategory';
import {Ruleta} from './components/ruleta/ruleta';
import  {RuletaCategoria}  from './pages/RuletaCategoria';
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
        <Route path="/avatar/" element={< Avatar/>}/>
        <Route path="/winner/" element={< WinnerPage/>}/>
        <Route path="/loser/" element={<LoserPage/>}/>
        <Route path="/PaginaJuego/" element={<PaginaJuego/>}/>
        <Route path="/ruleta" element={<Ruleta/>}/>
        <Route path='/RuletaCategoria' element={<RuletaCategoria/>}/>
        <Route path='/disneycategory' element={<DisneyCategory/>}/>

      </Routes>
    </BrowserRouter> 
    </> 
    
  );
}

export default App;
