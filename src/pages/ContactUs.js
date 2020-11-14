import React from "react";

//import animations and styles
import { motion } from "framer-motion";
import {
  PageAnimation,
  TitleAnimation,
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  SlideTransitionAnimation,
} from "../Animations";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <StyledContact
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Frame1 variants={SlideTransitionAnimation}></Frame1>
      <Frame2 variants={SlideTransitionAnimation}></Frame2>
      <Frame3 variants={SlideTransitionAnimation}></Frame3>
      <Frame4 variants={SlideTransitionAnimation}></Frame4>
      <StyledTitle>
        <Hide>
          <motion.h2 variants={TitleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </StyledTitle>
      <div>
        <Hide>
          <StyledSocial variants={TitleAnimation}>
            <StyledCircle />
            <h2>Send us a message</h2>
          </StyledSocial>
        </Hide>
        <Hide>
          <StyledSocial variants={TitleAnimation}>
            <StyledCircle />
            <h2>Send an email</h2>
          </StyledSocial>
        </Hide>
        <Hide>
          <StyledSocial variants={TitleAnimation}>
            <StyledCircle />
            <h2>Social media</h2>
          </StyledSocial>
        </Hide>
      </div>
      <ScrollTop />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #353535;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
