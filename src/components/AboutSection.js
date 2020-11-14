import React from "react";
import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";
import Wave from "./Wave";

//Framer Motion
import { motion } from "framer-motion";
import { TitleAnimation, FadeAnimation, PhotoAnimation } from "../Animations";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={TitleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={TitleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={TitleAnimation}>come true</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={FadeAnimation}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={FadeAnimation}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={PhotoAnimation} src={home1} alt="Logo" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
