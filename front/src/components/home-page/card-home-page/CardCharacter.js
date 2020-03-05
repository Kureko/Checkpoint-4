import React from 'react';
import './CardHomePage.css';
import characterBack from '../../../assets/images/pers-back.png';
import panelBack from '../../../assets/images/text-back.jpg';

const CardCharacter = ({ name, presentation }) => {
    return (
        <div>
            <div className="character-card">
                <div>
                    <img src={characterBack} alt="character" className="chara-back"/>
                </div>
                <div className="chara-name">
                    <p>{name ? `${name}` : 'nom'}</p>
                </div>
                <div className="chara-pres">
                    <p>{presentation ? `${presentation}` :'text'}</p>
                </div>
                <div>
                    <img src={panelBack} alt="panel chara" className="chara-panel"/>
                </div>
            </div>
        </div>
    )
};

export default CardCharacter;