import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ImageBack from '../../assets/images/BERK2.png';
import CharaBack from '../../assets/images/navbar-back.jpg';
import DragonBack from '../../assets/images/navbar-back.jpg';
import { getCharacters } from '../../api/Api';
import { getDragons } from '../../api/Api';
import CardCharacter from './card-home-page/CardCharacter';
import CardDragons from './card-home-page/CardDragons';
import HiccupImage from '../../assets/images/HiccupHiddenWorld.png';
import AstridImage from '../../assets/images/AstridHiddenWorldTop.png';
import ZephyrImage from '../../assets/images/Zephyr_haddock.png';
import NuffinkImage from '../../assets/images/Nuffink_haddock.png';
import ToohtlessImage from '../../assets/images/Toothless.png';
import LightImage from '../../assets/images/light-fury.png';
import NlImage from '../../assets/images/NL.png';
import icon from '../../assets/images/Toothless-wood.png';

const HomePage = () => {
    const [characters, setCharacters] = useState([]);
    const [dragons, setDragons] = useState([]);

    useEffect(() => {
        (async () => {
        setCharacters(await getCharacters());
        })();
    }, []);

    useEffect(() => {
        (async () => {
        setDragons(await getDragons());
        })();
    }, []);

    return(
        <div className="main-page">
            <Navbar />
            <div className="main-head">
                <h1 className="header">How To Train Your Dragon Fan Site</h1>
                <img src={ImageBack} alt="back" className="background-header" />
            </div> 
            <div className="chara-head">
                <h2>Characters presentation</h2>  
                <img src={icon} alt="icon 1" className="first-icon" />
                <img src={icon} alt="icon 2" className="second-icon" />
            </div> 
            <img src={CharaBack} alt="character header" className="back-chara" />            
            <div className="characters fade-in-left ">
                {characters &&
                  characters.map((character, index) => (
                    <CardCharacter 
                      key={index}
                      name={character.name}
                      presentation={character.presentation}
                    />
                ))}
                <div>
                    <img src={HiccupImage} alt="Hiccup" className="hiccup"/>
                </div>
                <div>
                    <img src={AstridImage} alt="Astrid" className="astrid"/>
                </div>
                <div>
                    <img src={ZephyrImage} alt="Zephyr" className="zephyr"/>
                </div>
                <div>
                    <img src={NuffinkImage} alt="Nuffink" className="nuffink"/>
                </div>
            </div>
            <div className="dragon-head">
                <h2>Dragons presentation</h2> 
                <img src={icon} alt="icon 3" className="third-icon" />
                <img src={icon} alt="icon 4" className="fourth-icon" /> 
            </div> 
            <img src={DragonBack} alt="dragon header" className="back-dragon" />      
            <div className="dragons fade-in-left-two">
                {dragons &&
                  dragons.map((dragon, index) => (
                   <CardDragons
                      key={index}
                      name={dragon.name}
                      race={dragon.race}
                      presentation={dragon.presentation}
                      ability={dragon.ability}
                   />
                ))}
                <div>
                    <img src={ToohtlessImage} alt="Toothless" className="toothless"/>
                </div>
                <div>
                    <img src={LightImage} alt="Night Fury" className="light-fury"/>
                </div>
                <div>
                    <img src={NlImage} alt="Night Light" className="night-light"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;