import React from "react";
import Form from "./Form";
import styled from "styled-components";
import { Title } from "../styles/Contact";
import Socials from "./Socials";

export const Contact = () => {
  return (
    <div id="contact" style={{ paddingTop: "2.5rem" }}>
      <Title>Contact</Title>
      <DIV>
        <Form />
        <Socials />
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
 
  @media screen and (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;