import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import "./_ruleta.scss";


const data = [
  { option: 'Disney' },
  { option: 'Caricaturas' },
  { option: 'Cine Argentino' },
  { option: 'Ficcion' },
  { option: 'Romance' },
  { option: 'Marvel' }
]

export const Ruleta = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <>
      <Wheel 
      
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#BC7AF9']}
        textColors={["white"]}
        radiusLineWidth = {2}
        outerBorderWidth = {2}
        offsetX = {0}
        offsetY = {0}
       
       

        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button className='boton' onClick={handleSpinClick}>GIRAR</button>
    </>
  )
}