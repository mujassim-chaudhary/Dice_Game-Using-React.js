import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
     <RuleContainer>
        <h2>How to Play Dice Game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on Dice image</p>
            <p>After clicking on dice if selected number is equal to dice number you will get same point as dice</p>
            <p>If you get wrong guess then 2 point will deducated </p>
        </div>
     </RuleContainer>
  )
}

export default Rules;

const RuleContainer = styled.div`
  background-color: #fbf1f1;
  padding-left: 20px;
  min-height: 100px;
  max-width: 820px;
   margin: auto;

  h2{
    font: 18px;
    margin-top: -15px;
  }

  .text{
    font-size: 15px;
    margin-top: -13px;
    line-height: 10px;
  }
`;