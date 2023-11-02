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
import Typewriter from "typewriter-effect";
import { Bio } from "../data/constants";
import { Link } from "react-router-dom";

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

            <Link
              className="nav-link resume"
              to="https://drive.google.com/uc?export=download&id=1SmJXZ5c4q4UdQl2xTRkQ2zKs18GkhRQ5"
            >
              <ResumeButton
                id="resume-button-2"
                onClick={() => {
                  window.open(Bio.resume, "_blank");
                }}
              >
                Download Resume
              </ResumeButton>
            </Link>
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
