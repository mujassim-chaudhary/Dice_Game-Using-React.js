 import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Rules from "./Rules";

function GamePlay() {
  const [score,setScore] =useState(0);
  const [SelectedNumber, setSelectedNumber] = useState();

  const [currentDice,setCurrentDice] = useState(1);
  const [error,setError] = useState("");

  const [showRules ,setShowRules] = useState(false);

  const generateRandomNumber =(min,max) =>{
    return Math.floor(Math.random() * (max -min)+min); 
}

const roleDice =() =>{

  if(!SelectedNumber){
    setError("You have not Selected any Number");
    return;
  }
  
    const randomNum = generateRandomNumber(1,7);

    setCurrentDice( randomNum) /* this is as up function / setCurrentDice((prev) => randomNum) */
    
    if (SelectedNumber == randomNum) {
      setScore((prev) => prev + randomNum);
    } else{
      setScore((prev) => prev -2);
    }

    setSelectedNumber(undefined);
}

const reSetScore =() =>{
  setScore(0);
}

  return (
    <MainContainer >
         <div className="top_section">
           <TotalScore score={score}/>
           <NumberSelector setError={setError} error={error} SelectedNumber={SelectedNumber}
           setSelectedNumber={setSelectedNumber}/>
        </div>
        <RoleDice currentDice={currentDice}
        roleDice={roleDice}/>

        <div className="btnclass">
          <Button onClick={reSetScore}>Reset Score</Button>
          <Button onClick={() => setShowRules((prev) =>!prev)}>Show Rule</Button>
        </div>

        {showRules && <Rules/>}
    </MainContainer>

  );
};

export default GamePlay;

const MainContainer = styled.div`
  
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: center;
    
  }

  .btnclass{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:15px;
    margin-right:98px;
    
    
  }
`;

const Button = styled.button`
color: white;
padding: 10px 18px;
background-color: black;
border-radius: 5px;
min-width: 180px;
border: none;
font-size: 16px;
position: relative;
left: 50px;
bottom: 20px;
border: 1px solid transparent;
transition: 0.6s background ease-in;
cursor:pointer;


&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
}

`;