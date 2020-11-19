import React from "react";
import { resizeMedia } from "../util";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailActions";
import { Link } from "react-router-dom";

//Import Styles and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { popUp } from "../Animations";

const Game = ({ id, name, released, image }) => {
  const stringPathId = id.toString();
  //Load game details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <GameStyled
      layoutId={stringPathId}
      onClick={loadDetailHandler}
      variants={popUp}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={resizeMedia(image, 640)}
          alt={name}
        />
      </Link>
    </GameStyled>
  );
};

const GameStyled = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  @media (max-width: 1128px) {
    min-height: 70vh;
    img {
      height: 60vh;
    }
  }

  @media (max-width: 768px) {
    min-height: 35vh;
    img {
      height: 35vh;
    }
  }
`;

export default Game;
