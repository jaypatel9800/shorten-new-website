import React from "react";
import boost from "../images/bg-boost-desktop.svg";
import styled from "styled-components";

const Img = styled.img`
  background-color: ${(props) => props.theme.darkViolet};
  width: 100%;
  height:40vh;
  object-fit: cover;
`;
const Main = styled.div`
  position: relative;
  z-index: 2;
  height: 40vh;
`;

const Div = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Button = styled.button`
padding: 15px 40px;
border-radius: 30px;
font-size: 20px;
font-weight: 700;
cursor: pointer;
border: none;
background-color: ${props => props.theme.cyan};
color: white;
transition: all 0.4s ease;
&:hover{
    background-color: ${props => props.theme.cyanHover};
}
`;
const H1 = styled.h1`
font-size: 40px;
color: white;
text-align: center;
padding: 20px 0; 
@media(max-width: 768px){
    font-size: 27px;
}
`;

const Blue = () => {
  return (
    <Main>
      <Img src={boost} alt="boost-svg" />
      <Div>
        <H1>Boost your links today</H1>
        <Button>Get Started</Button>
      </Div>
    </Main>
  );
};

export default Blue;
