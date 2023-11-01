import React from "react";
import { skills } from "../data/constants";
import {
  Container,
  Skill,
  SkillImage,
  SkillItem,
  SkillList,
  SkillTitle,
  SkillsContainer,
  Wrapper,
} from "../styles/Skills";
import { Title } from "../styles/Title";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle style={{color:"white"}}>{skill.title}</SkillTitle>
              <SkillList className="skills-card">
                {skill.skills.map((item) => (
                  <SkillItem className="skills-card-name" style={{border:"1px solid", backgroundColor:"transparent"}}>
                    <SkillImage className="skills-card-img" src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
        <div></div>
      </Wrapper>
    </Container>
  );
};

export default Skills;
