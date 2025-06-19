 import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({setError,error,SelectedNumber,setSelectedNumber}) => {

    const arrNumber =[1,2,3,4,5,6,];

    const numberSelectedHandler =(value) =>{
      setSelectedNumber(value);
      setError("");
    }

    
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p> 
      <div className="flex">
        {arrNumber.map((value,i) =>(
           <Box isSelected ={value == SelectedNumber}
           onClick={() => numberSelectedHandler(value)}
           key={i}>{value}</Box>
        ))}
      </div>
      <p>Select Number</p>
   </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
   
   /* position: relative;
    bottom: 300px;
    left: 500px; */
  .flex{
    display: flex;
    gap: 24px;
    
  }
  p{
    font-size: 24px;
    font-weight: 700px;
  }

  .error{
    color: red;
    font-size: 18px;
  }
`;

const Box = styled.div`
  height: 62px;
  width: 62px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor:pointer;
  /*this is css props property */
  background-color: ${(props) =>(props.isSelected ? "black" : "white")};
  color: ${(props) =>(props.isSelected ? "white" : "black")};
`;