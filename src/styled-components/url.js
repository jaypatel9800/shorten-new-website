import React, { useState } from "react";
import styled ,{ css } from "styled-components";
import shrtcode from "../api/shrtcode";

const Form = styled.form`
  width: 100%;
  height: 20vh;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.darkViolet};
  @media (max-width: 768px) {
    flex-direction: column;
    height: 30vh;
    justify-content: space-evenly;
  }
`;

const Div = styled.div`
  margin: 1rem 5rem 0 5rem;
  padding: 1rem 1rem;
  @media (max-width: 768px) {
    margin: 1rem 0.5rem 0 0.5rem;
  }
`;

const Input = styled.input`
  height: 10vh;
  width: 100%;
  padding: 0 1rem;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 700;
`;
const Span = styled.span`
  color: ${(props) => props.theme.red};
`;

const MainButton = styled.button`
  width: 20%;
  height: 10vh;
  margin: 0 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.cyan};
  color: white;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 700;
  transition: all 0.4s ease;
  @media (max-width: 768px) {
    width: 90%;
  }
  &:hover {
    background-color: ${(props) => props.theme.cyanHover};
  }
  ${(props) =>
    props.primary &&
    css`
    background-color: ${(props) => props.theme.cyanHover};
    `};
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 10vh;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Linkarea = styled.div`
  padding: 2rem 0;
  width: 100%;
`;

const H1 = styled.h1`
  margin: 1rem 0;
  display: flex;
  height: 10vh;
  justify-content: space-between;
  aling-items: center;
  padding: 1rem;
  background-color: white;
  font-size: 17px;
  color: ${(props) => props.theme.cyan};
  border-radius: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 20vh;
    text-align: center;
  }
`;

const Copy = styled.button`
  padding: 0 2rem;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.4s ease;
  background-color: ${(props) => props.theme.cyan};
  &:hover {
    background-color: ${(props) => props.theme.cyanHover};
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 7vh;
    text-align: center;
  }
`;

const Main = styled.div`
  margin-top: 2rem;
  background-color: ${(props) => props.theme.lightGray};
`;

const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;


const Link = () => {
  const [url, setUrl] = useState("");
  const [data, changeData] = useState();
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false)

  const validateUrl = (string) => {
    return string.match(HTTP_URL_VALIDATOR_REGEX)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.length === 0) {
      setError("please add a link");
    } else {
      if(validateUrl(url)){
        getLink();
      console.log(data);
      setUrl('');
      setLoad(!load);
      setError("");
      } else {
        alert("Please enter Valid URL")
      }
    }
  };

  const getLink = async () => {
    await shrtcode
      .get(`shorten?url=${url}`)
      .then((response) => {
        changeData(response.data.result)
        setLoad(false)
      })
      .catch((response) => console.error(response));
  };
  const copy = async () => {
    await navigator.clipboard.writeText(data.share_link);
    alert("text Copied!");
  };
  const copy2 = async () => {
    await navigator.clipboard.writeText(data.share_link);
    alert("text Copied!");
  };
  return (
    <Main>
      <Div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <InputField>
            <Input
              placeholder="shorten a link here"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <Span>{error}</Span>
          </InputField>
          {!load && (
            <MainButton onClick={(e) => handleSubmit(e)}>sorten it!</MainButton>
          )}
          {load && <MainButton primary><i class="fa fa-spinner fa-spin"></i></MainButton>}
        </Form>
        {typeof data !== "undefined" ? (
          <Linkarea>
            <H1>
              <h3>{data.full_short_link}</h3>
              <Copy onClick={copy}>Copy</Copy>
            </H1>
            <H1>
              <h3>{data.short_link}</h3>
              <Copy onClick={copy}>Copy</Copy>
            </H1>
            <H1>
              <h3>{data.full_short_link2}</h3>
              <Copy onClick={copy}>Copy</Copy>
            </H1>
            <H1>
              <h3>{data.short_link2}</h3>
              <Copy onClick={copy2}>Copy</Copy>
            </H1>
          </Linkarea>
        ) : (
          <div></div>
        )}
      </Div>
    </Main>
  );
};

export default Link;
