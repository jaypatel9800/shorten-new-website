import React from "react";
import styled from "styled-components";
import img from "../images/illustration-working.svg";

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;

  @media(max-width:1000px){
      flex-direction: column-reverse;
  }
`;
const Text = styled.div`
  width: 50%;
  display: flex;
  color: ${props => props.theme.veryDarkViolet};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1000px){
     width: 100%;
     text-align: center;
     padding: 2rem 0;
}
`;
const H1 = styled.h1`
 font-size: 4rem;
 font-weight: 700;
 line spacing: 2rem;
 padding: 0 0 0 100px;
 @media (max-width: 1000px){
     font-size: 2.5rem;
     padding: 0 0.5rem;
     text-align:center;
     width: 100%;
}
`;
const P = styled.p`
 font-size: 0.5rem;
 font-size: 1rem;
 padding: 0 100px 2rem 100px;
 color: ${props => props.theme.grayishViolet};
 @media (max-width: 1000px){
     padding: 0 3rem;
 }
`;
const Button = styled.button`
padding:10px 20px;
border:transparent;
justify-content: flex-start;
margin: 0.5rem 0 0 100px;
padding: 1rem 3rem;
background-color: ${props => props.theme.cyan};
border-radius: 40px;
font-size: 16px;
font-weight: 700;
cursor: pointer;
color: white;
transition: all 0.4s ease;
&:hover {
    opacity: 0.5;
    letter-spacing: 1px;
  }
@media (max-width: 1000px){
    margin: 40px auto;
}
`;
const Img = styled.img`
  width: 50%;
  @media (max-width: 1000px){
      width: 100%;
  }
`;

const Hero = () => {
  return (
    <Div>
      <Text>
        <H1>More than just shorter links</H1>
        <P>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </P>
        <Button>Get Started</Button>
      </Text>
      <Img src={img} alt="hero-img" />
    </Div>
  );
};

export default Hero;
