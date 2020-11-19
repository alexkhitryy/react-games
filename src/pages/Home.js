import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { useLocation } from "react-router-dom";

//Import Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

//Import Styles and Animations
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../Animations";

const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //get the data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameListStyled variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <GamesStyled>
              {searched.map((game) => {
                return (
                  <Game
                    key={game.id}
                    name={game.name}
                    released={game.released}
                    image={game.background_image}
                    id={game.id}
                  />
                );
              })}
            </GamesStyled>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <GamesStyled>
          {upcoming.map((game) => {
            return (
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
              />
            );
          })}
        </GamesStyled>
        <h2>Popular Games</h2>
        <GamesStyled>
          {popular.map((game) => {
            return (
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
              />
            );
          })}
        </GamesStyled>
        <h2>New Games</h2>
        <GamesStyled>
          {newGames.map((game) => {
            return (
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
              />
            );
          })}
        </GamesStyled>
      </AnimateSharedLayout>
    </GameListStyled>
  );
};

const GameListStyled = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  @media (max-width: 1280px) {
    padding: 0 2rem;
    h2 {
      padding: 2rem 0;
      text-align: center;
    }
  }
`;

const GamesStyled = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media (max-width: 1128px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
  @media (max-width: 768px) {
    grid-row-gap: 2.5rem;
  }
`;

export default Home;
