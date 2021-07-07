import React from "react";
import styled, {css} from "styled-components";
import Icon1 from "../images/icon-brand-recognition.svg";
import Icon2 from "../images/icon-detailed-records.svg";
import Icon3 from "../images/icon-fully-customizable.svg";

const Main = styled.div`
  background-color: ${(props) => props.theme.lightGray};
  padding: 20px;
`;
const Top = styled.div`
  text-align: center;
  font-size: 18px;
  padding: 2rem 0;
  color: ${(props) => props.theme.veryDarkViolet};
  @media (max-width: 1000px) {
    padding: 0 2rem;
    font-size: 15px;
  }
`;
const P = styled.p`
  color: ${(props) => props.theme.grayishViolet};
  padding: 1rem 25rem;
  @media (max-width: 1200px) {
    padding: 1rem 0;
  }
`;

const Grid1 = styled.div`
  height: 45vh;
  border-radius: 10px;
  box-shadow:20px 20px 35px #d0d0d0;
  margin: 20px 0 0 0;
  display: flex;
  width :22%;
  z-index: 2;
  font-size: 12px;
  background-color: white;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  @media (max-width: 1000px) {
    margin: 20px 0 0 0;
    width: 100%;
    align-items: center;
  }
  ${(props) =>
    props.primary &&
    css`
    margin: 60px 0 0 0;
    `};
    ${(props) =>
        props.secondary &&
        css`
        margin: 100px 0 0 0;
        `};
`;
const Iconback = styled.div`
  background-color: ${(porps) => porps.theme.darkViolet};
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 2rem;
`;

const Details = styled.div`
@media(max-width: 1000px){
    text-align: center;
}
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.veryDarkBlue};
  padding: 1rem;
`;
const Pin = styled.p`
padding: 0 1rem;
color: ${(props) => props.theme.grayishViolet};
`;

const Sections = styled.div`
  display: flex;
  height: 70vh;
  align-items: flex-start;
  position: relative;
  justify-content: space-evenly;
  @media(max-width: 1000px){
      flex-direction: column;
      height: auto;
  }
`;
const Rod = styled.div`
width: 70%;
top: 40%;
z-index: 1;
height: 2vh;
position: absolute;
background-color: ${props => props.theme.cyan};
@media(max-width: 1000px){
    width: 3%;
    left: 49%;
    top: 10%;
    height: 120vh;
}
`;

const Section = () => {
  return (
    <Main>
      <Top>
        <h1>Advanced Statistics</h1>
        <P>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </P>
      </Top>
      <Sections>
        <Grid1>
          <Iconback>
            <img src={Icon1} alt="icon-1" />
          </Iconback>
          <Details>
            <H1>Brand Recognition</H1>
            <Pin>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </Pin>
          </Details>
        </Grid1>
        <Grid1 primary>
          <Iconback>
            <img src={Icon2} alt="icon-2" />
          </Iconback>
          <Details>
            <H1>Detailed Records</H1>
            <Pin>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </Pin>
          </Details>
        </Grid1>
        <Grid1 secondary>
          <Iconback>
            <img src={Icon3} alt="icon-3" />
          </Iconback>
          <Details>
            <H1>Fully Customizable</H1>
            <Pin>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </Pin>
          </Details>
        </Grid1>
        <Rod></Rod>
      </Sections>
    </Main>
  );
};

export default Section;
