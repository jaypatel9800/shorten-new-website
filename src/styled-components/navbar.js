import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import logo from "../images/logo.svg";
import burger from "../images/hamburger.svg";

const MainDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  min-height: 8vh;
  color: ${(props) => props.theme.veryDarkBlue};

  @media (max-width: 920px) {
    flex-direction: column;
    width: 100%;
  }
`;
const Left = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  text-transform: capitalize;
  align-items: center;
  @media (max-width: 920px) {
    flex-direction: column;
    width: 100%;
  }
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 60%;
  @media (max-width: 920px) {
    flex-direction: column;
    width: 90%;
    position: absolute;
    border-radius: 10px 10px 0 0;
    text-align: center;
    margin: 50px 0 0 0;
    background-color: ${(props) => props.theme.darkViolet};
    color: ${(props) => props.theme.gray};
  }
`;
const Li = styled.li`
  opacity: 0.5;
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 920px) {
    margin: 20px 0;
    transition: all 0.4s ease;
    &:hover{
        letter-spacing: 1px;
    }
  }
  }
`;

const Right = styled.div`
  width: 35%;
  display: flex;
  letter-spacing: 2px;
  justify-content: flex-end;
  @media (max-width: 920px) {
    flex-direction: column;
    background-color: ${(props) => props.theme.darkViolet};
    width: 90%;
    position: absolute;
    margin: 590px 0 0 0;
    border-top: 0.5px solid ${(props) => props.theme.gray};
    border-radius: 0 0 10px 10px;
  }
`;

const Button = styled.button`
  margin: 0 20px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  text-transform: capitalize;
  opacity: 0.5;
  font-weight: 700;
  letter-spacing: 1px;
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 920px) {
    margin: 20px auto;
    color: white;
    opacity: 1
    transition: all 0.4s ease;
    &:hover{
        letter-spacing: 1px;
    }
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: ${(props) => props.theme.cyan};
      color: white;
      padding: 10px 25px;
      border-radius: 20px;
      opacity: 1;
      &:hover {
        background-color: ${props => props.theme.cyanHover};
      }
      @media (max-width: 920px) {
        color: white;
        opacity: 1;
      }
    `}
`;
const H2 = styled.h2`
  display: none;
  @media (max-width: 920px) {
    display: block;
  }
`;
const Div = styled.div`
  @media (max-width: 920px) {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Navbar = () => {
  const [toggle, changeToggle] = useState(true);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const myWidth = window.innerWidth;
      setWidth(myWidth);
      if (width >= 920) {
        changeToggle(true);
      } else {
        changeToggle(false);
      }
    });
  }, [width]);

  return (
    <MainDiv>
      <Left>
        <Div>
          <img src={logo} alt="logo" />
          <H2>
            <img
              src={burger}
              onClick={() => changeToggle(!toggle)}
              alt="hamburger"
            />
          </H2>
        </Div>
        <Ul style={toggle ? { display: "flex" } : { display: "none" }}>
          <Li>features</Li>
          <Li>pricing</Li>
          <Li>resources</Li>
        </Ul>
      </Left>
      <Right style={toggle ? { display: "flex" } : { display: "none" }}>
        <Button>Login</Button>
        <Button primary>sign up</Button>
      </Right>
    </MainDiv>
  );
};

export default Navbar;
