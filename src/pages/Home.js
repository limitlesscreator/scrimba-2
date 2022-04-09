import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadGames} from "../actions/gamesAction";
import {motion} from 'framer-motion'
import styled from 'styled-components'
import {Game} from "../Components/Game";
import {GameDetail} from "../Components/GameDetail";


export const Home = () => {
    //Fetch games
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    //get that data
    const {popular, newGames, upcoming} = useSelector(state => state.games)
    console.log(popular)
    return (
        <GameList>
            <GameDetail/>
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
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h3 {
    padding: 1rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`