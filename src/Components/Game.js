import React from 'react';
// Redux
import {useDispatch, useSelector} from 'react-redux'
// Animations
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {loadDetail} from "../actions/detailAciton";
import {Link} from "react-router-dom";

export const Game = ({name, released, image, id}) => {

    const dispatch = useDispatch()

    const loadDetailHandler = () => {
        console.log(loadDetail(id))
        dispatch(loadDetail(id))
    }

    return (
        <StyledGame onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={image} alt={name}/>
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 25px rgba(0,0,0,0.1);
img{width: 100%};
text-align: center;
border-radius: 1rem; 
overflow: hidden;
img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
}
`