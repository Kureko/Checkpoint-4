import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './Characters.css';

const Characters = () => {
    return(
        <div className="character-main">
            <Navbar />
            <div>
                <h2 className="character-title">Characters of the series</h2>
                <p className="character-text">Page under construction</p>
            </div>
            <Footer />
        </div>
    );
};

export default Characters;