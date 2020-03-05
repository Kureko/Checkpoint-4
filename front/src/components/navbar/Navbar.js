import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import imageNav from '../../assets/images/navbar-back.jpg';
import Strike from '../../assets/images/strike.png';
import Tidal from '../../assets/images/tidal.png';
import Tracker from '../../assets/images/tracker.png';
import Boulder from '../../assets/images/boulder.png';
import Mystery from '../../assets/images/mystery.png';
import Stoker from '../../assets/images/stoker.png';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-content">
                <NavLink className="main-title" to="/">
                    <h2>HTTYD Fan</h2>
                </NavLink>
                <NavLink className="gallery-link" to="/galleries">
                    <h2>Links images</h2>
                </NavLink>
            </div>
            <img src={imageNav} alt="nav"  className="nav-image"/>
            <div className="navbar-icon">
                <img src={Strike} alt="strk" className="strike-image"/>
                <img src={Tidal} alt="tdl" className="tidal-image"/>
                <img src={Tracker} alt="trck" className="tracker-image"/>
                <img src={Boulder} alt="bld" className="boulder-image"/>
                <img src={Mystery} alt="myst" className="mystery-image"/>
                <img src={Stoker} alt="stok" className="stoker-image"/>
            </div>
        </div>
    );
};

export default Navbar;