import styled from "styled-components";

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const Title = styled.div`
  padding-top: 1.8em;
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const DIV = styled.div`
  color: aliceblue;
  width: 70%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 2em;
  img {
    width: 100%;
    border-radius: 15px;
  }

  @media (min-width: 769px) and (max-width: 990px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      display: block;
      margin: auto;
    }
  }
`;
