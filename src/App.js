import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.svg'
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';


function App() {

  const [clicks, setClicks] = useState(0);

  const clickHandler = () => {
    setClicks(clicks + 1);
  };

  const restartCounter = () => {
    setClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de FreeCodeCamp' />
      </div>
      <div className='main-container'>
        <Counter clicks={clicks} />
        <Button text='Click' isClickButton={true} clickHandler={clickHandler} />
        <Button text='Restart' isClickButton={false} clickHandler={restartCounter} />
      </div>
    </div>
  );
}

export default App;
