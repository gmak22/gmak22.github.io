import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  NavLogo,
  Span,
} from "../styles/Navbar";
import { FaCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Bio } from "../data/constants";
import { useTheme } from "styled-components";
import Resume from "../assets/Makarand-Gijam-Resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav id="nav-menu">
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <h3>&lt; Makarand Gijam /&gt;</h3>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink className="nav-link home" href="#">
            Home
          </NavLink>
          <NavLink className="nav-link about" href="#about">
            About
          </NavLink>
          <NavLink className="nav-link skills" href="#skills">
            Skills
          </NavLink>
          <NavLink className="nav-link projects" href="#projects">
            Projects
          </NavLink>
          <NavLink className="nav-link contact" href="#contact">
            Contact
          </NavLink>
          <NavLink
            id="resume-button-1"
            className="nav-link resume"
            href={Bio.resume}
            target="_blank"
            onClick={() => {
              const link = document.createElement("a");
              link.href = Resume;
              link.setAttribute("download", "Makarand-Gijam-Resume.pdf");
              link.click();
            }}
          >
            Resume
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              className="nav-link about"
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              className="nav-link skills"
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              className="nav-link projects"
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              className="nav-link contact"
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            <MobileLink href={Bio.resume} target="display">
              Resume
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
