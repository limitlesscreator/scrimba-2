import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {loadGames} from "../actions/gamesAction";
import {motion, AnimatePresence} from 'framer-motion'
import styled from 'styled-components'
import {Game} from "../Components/Game";
import {GameDetail} from "../Components/GameDetail";
import {useLocation} from "react-router";
import {AnimateSharedLayout} from "framer-motion";
import {fadeIn} from "../animations";
// import * as ReactRouterDOM from "react-router";


export const Home = () => {
    //get the current location
    const location = useLocation()
    const pathId = location.pathname.split('/')[2]
    //Fetch games
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    //get that data
    const {popular, newGames, upcoming, isLoading,searched} = useSelector(state => state.games)
    return (
        <>
            {!isLoading && (
                <GameList variants={fadeIn} initial={'hidden'} animate={'show'} >
                    <AnimateSharedLayout type={'crossfade'}>
                        <AnimatePresence>{pathId && <GameDetail pathId={Number(pathId)}/>}</AnimatePresence>
                        {searched.length ? (
                            <div>
                                <h2>Searched Games</h2>
                                <Games>
                                    {searched.map(game => {
                                        return (
                                            <Game
                                                name={game.name}
                                                released={game.released}
                                                id={game.id}
                                                image={game.background_image}
                                                key={game.id}
                                            />
                                        )
                                    })}
                                </Games>
                            </div>
                        ) : null}
                        <h2>Upcoming Games</h2>
                        <Games>
                            {upcoming.map(game => {
                                return (
                                    <Game
                                        name={game.name}
                                        released={game.released}
                                        id={game.id}
                                        image={game.background_image}
                                        key={game.id}
                                    />
                                )
                            })}
                        </Games>
                        <h2>Popular</h2>
                        <Games>
                            {popular.map(game => {
                                return (
                                    <Game
                                        name={game.name}
                                        released={game.released}
                                        id={game.id}
                                        image={game.background_image}
                                        key={game.id}
                                    />
                                )
                            })}
                        </Games>
                        <h2>New Games</h2>
                        <Games>
                            {newGames.map(game => {
                                return (
                                    <Game
                                        name={game.name}
                                        released={game.released}
                                        id={game.id}
                                        image={game.background_image}
                                        key={game.id}
                                    />
                                )
                            })}
                        </Games>
                    </AnimateSharedLayout>
                </GameList>
            )}
        </>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
    padding: 1rem 0rem;
    color: ghostwhite;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`

// 10:32