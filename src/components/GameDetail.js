import React from "react";
//Import Styles and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Import Images
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation4 from "../img/playstation.svg";
import playstation5 from "../img/ps5.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import oneX from "../img/onex.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { resizeMedia } from "../util";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  //Exit Detail
  const ExitDetailHandler = (event) => {
    const element = event.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //Get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation4;
      case "PlayStation 5":
        return playstation5;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return oneX;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //Get stars
  const getRating = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.gameDetails
  );
  return (
    <>
      {!isLoading && (
        <CardShadowStyled className="shadow" onClick={ExitDetailHandler}>
          <DetailStyled layoutId={pathId}>
            <StatsStyled>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getRating()}
              </div>
              <InfoStyled>
                <h3>Platforms</h3>
                <PlatformsStyled>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    ></img>
                  ))}
                </PlatformsStyled>
              </InfoStyled>
            </StatsStyled>
            <MediaStyled>
              <motion.img
                layoutId={`image ${pathId}`}
                src={resizeMedia(game.background_image, 1280)}
                alt={game.name}
              />
            </MediaStyled>
            <DescriptionStyled>
              <p>{game.description_raw}</p>
            </DescriptionStyled>
            <div className="gallery">
              {screenshots.results.map((screenshot) => {
                return (
                  <img
                    key={screenshot.id}
                    src={resizeMedia(screenshot.image, 1280)}
                    alt={game.name}
                  ></img>
                );
              })}
            </div>
          </DetailStyled>
        </CardShadowStyled>
      )}
    </>
  );
};

const CardShadowStyled = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const DetailStyled = styled(motion.div)`
  width: 80%;
  border-radius: 1.5rem;
  padding: 1rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
  @media (max-width: 1128px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    width: 90%;
    left: 5%;
    h3 {
      font-size: 2rem;
      padding: 1rem 0;
    }
  }
`;

const StatsStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  @media (max-width: 1128px) {
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const InfoStyled = styled(motion.div)`
  text-align: center;
`;

const PlatformsStyled = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
  img:first-of-type {
    margin-left: 0;
  }
  @media (max-width: 1128px) {
    justify-content: space-between;
    img {
      margin-left: 1rem;
    }
    img:first-of-type {
      margin-left: 0;
    }
  }
`;

const MediaStyled = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const DescriptionStyled = styled(motion.div)`
  margin: 5rem 0;
  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;
export default GameDetail;
