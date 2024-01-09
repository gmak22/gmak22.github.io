import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavItems,
  ResumeButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  NavLogo,
} from "../styles/Navbar";
import { FaCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Bio } from "../data/constants";
import { useTheme } from "styled-components";
import Resume from "../assets/Makarand-Gijam-Resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("home");

  const theme = useTheme();

  const handleLinkClick = (link) => {
    setIsOpen(false);
    setActiveLink(link);
  };

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
          <NavLink
            className={`nav-link home ${activeLink === "home" ? "active" : ""}`}
            href="#"
            onClick={() => handleLinkClick("home")}
          >
            Home
          </NavLink>
          <NavLink
            className={`nav-link about ${
              activeLink === "about" ? "active" : ""
            }`}
            href="#about"
            onClick={() => handleLinkClick("about")}
          >
            About
          </NavLink>
          <NavLink
            className={`nav-link skills ${
              activeLink === "skills" ? "active" : ""
            }`}
            href="#skills"
            onClick={() => handleLinkClick("skills")}
          >
            Skills
          </NavLink>
          <NavLink
            className={`nav-link projects ${
              activeLink === "projects" ? "active" : ""
            }`}
            href="#projects"
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </NavLink>
          <NavLink
            className={`nav-link contact ${
              activeLink === "contact" ? "active" : ""
            }`}
            href="#contact"
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <ResumeButton
            id="resume-button-1"
            className={`nav-link resume ${
              activeLink === "resume" ? "active" : ""
            }`}
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
          </ResumeButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              className={`nav-link about ${
                activeLink === "about" ? "active" : ""
              }`}
              href="#about"
              onClick={() => handleLinkClick("about")}
            >
              About
            </MobileLink>
            <MobileLink
              className={`nav-link skills ${
                activeLink === "skills" ? "active" : ""
              }`}
              href="#skills"
              onClick={() => handleLinkClick("skills")}
            >
              Skills
            </MobileLink>
            <MobileLink
              className={`nav-link projects ${
                activeLink === "projects" ? "active" : ""
              }`}
              href="#projects"
              onClick={() => handleLinkClick("projects")}
            >
              Projects
            </MobileLink>
            <MobileLink
              className={`nav-link contact ${
                activeLink === "contact" ? "active" : ""
              }`}
              href="#contact"
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </MobileLink>
            <ResumeButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.resume}
              target="display"
            >
              Resume
            </ResumeButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
