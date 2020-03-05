import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './Games.css';

const Games = () => {
    return(
        <div className="game-main">
            <Navbar />
            <div>
                <h2 className="game-title">Games based on the series</h2>
                <p className="game-text">Page under construction</p>
            </div>
            <Footer />
        </div>
    );
};

export default Games;