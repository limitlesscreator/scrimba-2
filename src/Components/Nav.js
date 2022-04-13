import React, {useState} from 'react';
import {motion} from "framer-motion";
import logo from "../img/logo.svg";
import styled from "styled-components"
import {useDispatch} from "react-redux";
import {fetchSearch} from "../actions/gamesAction";

export const Nav = () => {
    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState('')

    const inputHandler = e => {
        setTextInput(e.currentTarget.value)
    }

    const submitSearch = (event) => {
        event.preventDefault()
        dispatch(fetchSearch(textInput))
        setTextInput('')
    }

    const clearSearchGames = () => {
        dispatch({type: "CLEAR_SEARCHED"})
    }

    return (
        <StyledNav>
            <Logo>
                <img src={logo} alt="logo"/>
                <h1 onClick={clearSearchGames}>Ignite</h1>
            </Logo>
            <form className="search">
                <input type="text" value={textInput} onChange={inputHandler}/>
                <button onClick={submitSearch} type={'submit'}>
                    Search
                </button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
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
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;