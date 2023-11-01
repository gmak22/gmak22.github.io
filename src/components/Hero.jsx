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
    <div>
      <HeroContainer id="home">
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
              id="resume-link-2"
              href={Bio.resume}
              target="_blank"
              onClick={() => {
                const link = document.createElement("a");
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
