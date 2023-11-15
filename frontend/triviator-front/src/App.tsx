/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

import { BrowserRouter, Route, Routes} from 'react-router-dom'; 
import WinnerPage from './pages/Winnerpage'; 
import LoserPage from './pages/Loserpage';
import LoginPage from './pages/LoginPage';
import PaginaJuego from './pages/PaginaJuego';
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
    <p> { datav1 } </p>
    <button onClick={ getDataFromServer }>
      obtener mensaje del server
    </button>
    <BrowserRouter>
      <Routes>
        <Route path="/login/" element={<LoginPage/>}/>
        <Route path="/winner/" element={< WinnerPage/>}/>
        <Route path="/loser/" element={<LoserPage/>}/>
        <Route path="/PaginaJuego/" element={<PaginaJuego/>}/>

      </Routes>
    </BrowserRouter> 
    </> 
    
  );
}

export default App;
