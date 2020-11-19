import React, { useState } from "react";
//Import Styles and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../Animations";
//Import redux and routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const searchHandler = (event) => {
    setSearchInput(event.target.value);
  };
  const submitSearch = (event) => {
    event.preventDefault();
    dispatch(fetchSearch(searchInput));
    setSearchInput("");
  };
  const clearSearched = () => {
    dispatch({
      type: "CLEAR_SEARCHED",
    });
  };
  return (
    <NavStyled variants={fadeIn} initial="hidden" animate="show">
      <LogoStyled onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </LogoStyled>
      <form className="search" onSubmit={submitSearch}>
        <input value={searchInput} onChange={searchHandler} type="text" />
        <button type="submit">Search</button>
      </form>
    </NavStyled>
  );
};

const NavStyled = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
  @media (max-width: 1280px) {
    padding: 1rem 3rem;
    input {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    input {
      width: 100%;
    }
    button {
      width: 30%;
      font-size: 1.5rem;
      padding: 0.5rem;
      margin-top: 1rem;
    }
  }
`;
const LogoStyled = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
  img {
    width: 2rem;
    height: 2rem;
  }
  @media (max-width: 1280px) {
    padding: 0.5rem;
  }
`;
export default Nav;
