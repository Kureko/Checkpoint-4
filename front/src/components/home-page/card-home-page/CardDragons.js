import React from 'react';
import './CardHomePage.css'
import dragonBack from '../../../assets/images/pers-back.png';
import signBack from '../../../assets/images/text-back.jpg';


const CardDragons = ({ name, race, presentation, ability }) => {
    return (
        <div className="dragon-card">
            <div>
                <img src={dragonBack} alt="dragon" className="dragon-back"/>
            </div>
            <div className="dragon-name">
                <p>{name ? `${name}` : 'nom'}</p>
            </div>
            <div className="dragon-race">
                <p>{race ? `${race}` : 'dragon'}</p>
            </div>
            <div className="dragon-ability">
                <p>{ability ? `${ability}` : 'vol'}</p>
            </div>
            <div className="dragon-pres">
                <p>{presentation ? `${presentation}` :'text'}</p>
            </div>
            <div>
                <img src={signBack} alt="panel dragon" className="dragon-panel"/>
            </div>
        </div>
    )
};

export default CardDragons;