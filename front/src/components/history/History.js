import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './History.css';

const History = () => {
    return(
        <div className="hist-main">
            <Navbar />
            <div>
                <h2 className="hist-title">History of the series</h2>
                <p className="hist-text">Page under construction</p>
            </div>
            <Footer />
        </div>
    );
};

export default History;