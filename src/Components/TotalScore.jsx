import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
     <ScoreContainer>
        <h1> {score}</h1>
        <p>Total Score</p>
     </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;

h1{
    font-size: 80px;
    position: relative;
    bottom: 15px;
    line-height: 10px;
}
p{
    font-size: 24px;
    font-weight: 500;
    position: relative;
    bottom: 30px;
}

`;