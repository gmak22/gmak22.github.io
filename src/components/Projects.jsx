import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from '../styles/Project'
import ProjectCard from './ProjectCard'
import { projects } from '../data/constants'
import { Title } from '../styles/Title'

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects