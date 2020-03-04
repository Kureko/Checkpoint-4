import React from 'react';
import './HomePage.css';
import imageBack from '../../assets/images/BERK2.png';

const HomePage = () => {
    return(
        <div>
            <div>
                <h1 className="header">How To Train Your Dragon Fan Site</h1>
                <img src={imageBack} alt="back" className="background-header" />
            </div>
        </div>
    )
}

export default HomePage;