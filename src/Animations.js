import styled from "styled-components";
import { motion } from "framer-motion";

export const PageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const SlideTransitionAnimation = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const FramesContainerAnimation = {
  show: {
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

export const TitleAnimation = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const FadeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const PhotoAnimation = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const LineAnimation = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: { duration: 1.2 },
  },
};

export const InViewAnimation = {
  hidden: {
    scale: 1.2,
    opacity: 0,
    transition: { duration: 0.3 },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

//Page transition frames
export const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
export const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
export const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
export const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
