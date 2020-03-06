import React from 'react';
import './Footer.css';
import imageFooter from '../../assets/images/navbar-back.jpg';


const Footer = () => {
    return(
        <div className="footer">
            <p className="footer-text">All the contents on this site are under copyright. Credits are in the Links images section.</p>
            <img src={imageFooter} alt="foot" className="footer-back"/>
        </div>
    )
};

export default Footer;