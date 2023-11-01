import React from "react";
import { useRef } from "react";
import {
  Container,
  Wrapper,
  ContactButton,
  ContactForm,
  ContactInput,
  ContactTitle,
  ContactInputMessage,
} from "../styles/Contact";

const Form = () => {
  const form = useRef();

  return (
    <Container>
      <Wrapper>
        <ContactForm ref={form}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" />
          <ContactInput placeholder="Your Name" />
          <ContactInputMessage placeholder="Message" rows="8" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Form;
