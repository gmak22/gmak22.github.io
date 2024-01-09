import React from "react";
import { skills } from "../data/constants";
import { Container, SkillCard, SkillDiv } from "../styles/Skills";
import { Title } from "../styles/Title";

const Skills = () => {
  return (
    <Container id="skills">
      <Title>Skills</Title>
      <SkillCard className="skills-card">
        {skills.map((ele) => {
          return (
            <SkillDiv key={ele.id}>
              <img className="skills-card-img" src={ele.image} width={100} />
              <p className="skills-card-name">{ele.name}</p>
            </SkillDiv>
          );
        })}
      </SkillCard>
    </Container>
  );
};

export default Skills;
