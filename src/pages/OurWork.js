import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//import animations and styles
import { motion } from "framer-motion";
import {
  PageAnimation,
  FramesContainerAnimation,
  SlideTransitionAnimation,
  FadeAnimation,
  PhotoAnimation,
  LineAnimation,
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  InViewAnimation,
} from "../Animations";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyledWork
      variants={PageAnimation}
      // style={{ background: "white" }}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={FramesContainerAnimation}>
        <Frame1 variants={SlideTransitionAnimation}></Frame1>
        <Frame2 variants={SlideTransitionAnimation}></Frame2>
        <Frame3 variants={SlideTransitionAnimation}></Frame3>
        <Frame4 variants={SlideTransitionAnimation}></Frame4>
      </motion.div>
      <StyledMovie>
        <motion.h2 variants={FadeAnimation}>The athlete</motion.h2>
        <motion.div variants={LineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <ImageHide>
            <motion.img variants={PhotoAnimation} src={athlete} alt="Athlete" />
          </ImageHide>
        </Link>
      </StyledMovie>
      <StyledMovie
        variants={InViewAnimation}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <motion.h2 variants={FadeAnimation}>The Racer</motion.h2>
        <motion.div variants={LineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <ImageHide>
            <motion.img variants={PhotoAnimation} src={theracer} alt="Racer" />
          </ImageHide>
        </Link>
      </StyledMovie>
      <StyledMovie
        variants={InViewAnimation}
        ref={element2}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2 variants={FadeAnimation}>Good Times</motion.h2>
        <motion.div variants={LineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <ImageHide>
            <motion.img
              variants={PhotoAnimation}
              src={goodtimes}
              alt="Good Times"
            />
          </ImageHide>
        </Link>
      </StyledMovie>
      <ScrollTop />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 10vh;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
    color: white;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const ImageHide = styled.div`
  overflow: hidden;
`;

export default OurWork;
