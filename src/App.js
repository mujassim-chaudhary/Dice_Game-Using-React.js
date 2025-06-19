import { useState } from 'react';
import './App.css';
 import StartGame from './Components/StartGame';
import GamePlay from './Components/GamePlay';
function App(){ 

  const prev =false;
  const [isGameStarted, setIsGameStarted] =useState(prev);
  
  const toggleGame =() =>{
    setIsGameStarted((prev) =>!prev);
  }

    return (
            <div>
               {/* this is ternary operator */}
               {isGameStarted ? <GamePlay/> : <StartGame toggle ={ toggleGame}/>}
            </div>
    );  
} ;


export default App;