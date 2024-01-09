import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  gap: 2em;
  padding-top: 4.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
 // background-color: var(--cardbg-color);
 
`;

export const SkillCard = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	margin: auto;

	gap: 1em;
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap:0.5em;
  background-color: white;
  border: 0 1px solid #164863;
  border-radius: 0.6em;
  text-align: center;
  padding: 0.4em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-weight: bold;
`;