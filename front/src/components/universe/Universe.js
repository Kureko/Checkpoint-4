import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './Universe.css';

const Universe = () => {
    return(
        <div className="univ-main">
            <Navbar />
            <div>
                <h2 className="univ-title">Background and lore of the series</h2>
                <p className="univ-text">Page under construction</p>
            </div>
            <Footer />
        </div>
    );
};

export default Universe;