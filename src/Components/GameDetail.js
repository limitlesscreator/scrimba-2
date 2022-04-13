import React from 'react';
// Styling and Animation
import styled from 'styled-components'
import {motion} from 'framer-motion'
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import emptystar from "../img/star-empty.png"
import star from "../img/star-full.png"

//Redux
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {smallImage} from "../util";

export const GameDetail = ({pathId}) => {
    const navigate = useNavigate()
    console.log(navigate)
    console.log(pathId)
    // Data
    const {screen, game, isLoading} = useSelector(state => state.detail)
    console.log(game, screen)

    //Exit
    const exitDetailHandler = (e) => {
        const element = e.target
        // the element which we are click on
        console.log(element)
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto'
            document.body.style.paddingRight = '0px'
            navigate('/')
            console.log('work')
        }
    }

    const getPlatform = waay => {
        switch (waay) {
            case 'PlayStation 4':
                return playstation
            case 'PlayStation 5':
                return playstation
            case 'Xbox Series S/X':
                return xbox
            case 'Xbox One':
                return xbox
            case 'macOS':
                return apple
            case 'PC':
                return steam
            case 'Nintendo Switch':
                return nintendo

            default:
                return gamepad
        }
    }

    const filterPlatform = () => {
        return game.platforms.filter(el => el.platform.name !== 'PlayStation 5' && el.platform.name !== 'Xbox Series S/X')
            .map(data => (
                <img
                    key={data.platform.id}
                    src={getPlatform(data.platform.name)}
                    alt={data.platform.name}/>
            ))
    }

    const countStars = () => {
        const value = Math.trunc(game.rating)
        let arr = []
        for (let i = 0; i < 5; i++){
            if(i <= value){
                arr.push(<img src={star} alt=""/>)
            }
            else {
                arr.push(<img src={emptystar} alt=""/>)
            }
        }
        return arr
    }

    return (
        <>
            {!isLoading && (
                <CardShadow className={'shadow'} onClick={exitDetailHandler}>
                    <Detail layoutId={Number(pathId)}>
                        <Stats>
                            <div className={'rating'}>
                                <motion.h3 layoutId={`title ${Number(pathId)}`}>{game.name}</motion.h3>
                                <p>Rating: {countStars()}</p>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {filterPlatform()}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${Number(pathId)}`}
                                        src={smallImage(game.background_image, 1280)} alt=""/>
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className={'gallery'}>
                            {screen.results.map(screen => (
                                <img src={smallImage(screen.image, 1280)} key={screen.id} alt="game"/>
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track{
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img{
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p img{
  margin: -3px 0 0 5px;
  height: 2rem;
  width: 2rem;
  display: inline;
  }
  p img:first-child{
  margin-left: 12px;}
  p{
  display:flex;
  align-items: center;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
    flex-wrap: wrap;
    justify-content: space-evenly;
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 7px;
    width: 40px;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

