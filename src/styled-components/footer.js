import React from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../images/logo.svg";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Pin } from "../images/icon-pinterest.svg";
import { ReactComponent as Twitt } from "../images/icon-twitter.svg";
import { ReactComponent as Insta } from "../images/icon-instagram.svg";

const Foot = styled.div`
  background-color: ${(props) => props.theme.veryDarkViolet};
  display: flex;
  height: 50vh;
  text-align: center;
  justify-content: space-evenly;
  padding: 40px 0 0 0;
  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
  }
`;
const First = styled.div`
  width: 20%;
  @media (max-width: 500px) {
    width: 100%;
    padding: 20px 0;
  }
`;
const Second = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  font-size: 12px;
  color: white;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

const C1 = styled.div`
  @media (max-width: 500px) {
    padding: 40px 0 0 0;
  }
`;
const H2 = styled.h2`
  @media (max-width: 500px) {
    padding: 15px 0;
  }
`;
const P = styled.p`
  padding: 20px 0 0 0;
  font-size: 15px;
  opacity: 0.7;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  @media (max-width: 500px) {
    padding: 7px 0 0 0;
  }
  transition: all 0.4s ease;
&:hover{
    color: ${props => props.theme.cyan};
}
`;
const Third = styled.div`
  display: flex;
  width: 12%;
  justify-content: space-between;
  @media (max-width: 500px) {
    width: 100%;
    justify-content: space-evenly;
    padding: 30px 40px;
  }
`;
const Socal = styled.div`
fill: white;
cursor: pointer;
transition: all 0.2s ease;
&:hover{
    fill: ${props => props.theme.cyan};
}
`;
const Footer = () => {
  return (
    <Foot>
      <First>
        <Icon fill="white" />
      </First>
      <Second>
        <C1>
          <H2>Features</H2>
          <P>Link Shortening</P>
          <P>Branded Links</P>
          <P>Analytics</P>
        </C1>
        <C1>
          <H2>Resources</H2>
          <P>Blog</P>
          <P>Developers</P>
          <P>Support</P>
        </C1>
        <C1>
          <H2>Company</H2>
          <P>About</P>
          <P>Our Team</P>
          <P>Careers</P>
          <P>Contact</P>
        </C1>
      </Second>
      <Third>
        <Socal>
          <Facebook />
        </Socal>
        <Socal>
          <Twitt />
        </Socal>
        <Socal>
          <Pin />
        </Socal>
        <Socal>
          <Insta />
        </Socal>
      </Third>
    </Foot>
  );
};

export default Footer;
