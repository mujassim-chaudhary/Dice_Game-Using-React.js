 import styled from "styled-components";

function StartGame({toggle}) {
  return (
     <Container>
        <div>
            <img src="/images/dice.png" alt="dice photo" />
        </div>
        <div className="content">
            <h1>Dice Game </h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
     </Container>
  );
};

export default StartGame;

const Container =styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;

.content{
    h1{
        font-size: 96px;
        white-space: nowrap;
        
    }
}

`;

const Button = styled.button`
color: white;
padding: 10px 18px;
background-color: black;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;
position: relative;
left: 50px;
bottom: 20px;
border: 1px solid transparent;
transition: 0.6s background ease-in;


&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
}

`;