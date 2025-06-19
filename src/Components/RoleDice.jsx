 import { useState } from "react";
import styled, { Styled } from "styled-components"

const RoleDice = ({currentDice,roleDice}) => {

    

   

  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="dice_logo" />
        </div>
        <p>Click on Dice To ROll</p>
    </DiceContainer>

   )
}

export default RoleDice;

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: -50px;
margin-bottom: 25px;


p{
    font-size: 18px;
    margin-top: -7px;
    
}
img{
    height: 180px;
    width: 180px;
    cursor:pointer;
}

`;