import "./App.css";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { Github } from "./components/Github";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
`;

const Copyright = styled.p`
  color: white;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  text-align: center;
  padding: 30px 0;
`;

function App() {
  const year = new Date().getFullYear();
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  
  console.log(openModal);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Wrapper>
            <HeroSection />
            <About />
            <Skills />
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Github />
            <Contact />
            <Copyright>
              &copy; {year} Makarand Gijam. All rights reserved.
            </Copyright>
            {openModal.state && (
              <ProjectDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
