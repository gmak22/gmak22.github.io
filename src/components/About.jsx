import React from "react";
import { DIV, SubTitle } from "../styles/About";
import { Bio } from "../data/constants";
import coder from "../assets/coder.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";
import { SocialMediaIcon, SocialMediaIcons } from "../styles/Social";
import { Title } from "../styles/About";

export const About = () => {
  const style = {
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    textAlign: "justify",
  };

  return (
    <div id="about" style={{ minHeight: "80vh" }}>
      <Title style={{ color: "white" }}>About</Title>
      <DIV className="about section">
        <div>
          <img src={coder} alt="mak" />
        </div>
        <div style={style}>
          <SubTitle id="user-detail-intro">{Bio.description}</SubTitle>
          <SocialMediaIcons style={{ margin: "auto" }}>
            <SocialMediaIcon href={Bio.linkedin} target="display">
              <LinkedInIcon style={{ fontSize: "2.5em" }} />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.github} target="display">
              <GitHub style={{ fontSize: "2.5em" }} />
            </SocialMediaIcon>
          </SocialMediaIcons>
        </div>
      </DIV>
    </div>
  );
};
