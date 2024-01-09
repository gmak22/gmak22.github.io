import React from "react";
import styled from "styled-components";
import { ButtonGroup, Button } from "./ProjectDetails";

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: var(--cardbg-color);
  cursor: pointer;
  border-radius: 10px;
  //box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  background-color: var(--text-color2);
  border: 1px solid var(--text-color2);
  color: white;
  font-size: 12px;
  font-weight: 400;
  padding: 2px 8px;
  border-radius: 4px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color:  var(--text-color2);
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  font-weight: 400;
  color:  var(--text-color2);
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card
      className="project-card"
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <Image src={project.image} />
      <Tags className="project-tech-stack">
        {project.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title className="project-title">
          {project.title}
        </Title>
        <Description className="project-description">
          {project.description}
        </Description>
      </Details>
      <ButtonGroup>
        <Button
          className="project-github-link"
          href={project?.github}
          target="new"
        >
          View Code
        </Button>
        <Button
          className="project-deployed-link"
          href={project?.deploy}
          target="new"
        >
          Live App
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default ProjectCard;
