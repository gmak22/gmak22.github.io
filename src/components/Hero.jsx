import React from "react";
import {
  HeroContainer,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  ResumeButton,
} from "../styles/Hero";
import HeroImg from "../assets/HeroImage_new.png";
import Resume from "../assets/Makarand-Gijam-Resume.pdf";
import Typewriter from "typewriter-effect";
import { Bio } from "../data/constants";

const HeroSection = () => {
  return (
    <div id="home">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title id="user-detail-name">
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>

            <ResumeButton
              id="resume-button-2"
              className="nav-link resume"
              onClick={() => {
                window.open("https://www.dropbox.com/scl/fi/s9sdxgbun54jazfavwyhl/Makarand-Gijam-Resume.pdf?rlkey=ek5081slf74kl7a4pkcjsvqkc&dl=0", "_blank")
                const link = document.createElement("a");
                link.className = "resume-link-2"
                link.href = Resume;
                link.setAttribute("download", "Makarand-Gijam-Resume.pdf");
                link.click();
              }}
            >
              Download Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img className="home-img" src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
