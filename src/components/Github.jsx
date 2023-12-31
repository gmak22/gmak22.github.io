import React from "react";
import GitHubCalendar from "react-github-calendar";
import styled from "styled-components";
import { Title } from "../styles/Title";

export const Github = () => {
  const style = {
    border: "1px solid white",
    borderRadius: "5px",
    padding: "8px",
    color: "#38bdae",
    fontWeight: "bolder",
    display: "block",
    margin: "auto",
    marginBottom: "1em",
    backgroundColor:"#1a1b27",
  };

  return (
    <DIV>
      <Title style={{ marginBottom: "1.2em" }}>Github Stats</Title>
      <GitHubCalendar
        style={style}
        username="gmak22"
        blockSize={25}
        blockRadius={8}
        fontSize={14}
        hideColorLegend
        labels={{
          totalCount: "{{count}} contributions in the last half year",
        }}
      />
      <StatDIV>
        <img
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=gmak22&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=false"
        />

        <img
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com/?user=gmak22&theme=tokyonight&hide_border=false"
        />

        <img
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=gmak22&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
        />
      </StatDIV>
    </DIV>
  );
};

const DIV = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const StatDIV = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 1em;

  img {
    width: 90%;
  }
`;
