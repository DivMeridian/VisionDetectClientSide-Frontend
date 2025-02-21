import React from "react";
import "../Style/Footer.css";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import sg from "../Assest/sg.webp";
import us from "../Assest/us.webp";
import uae from "../Assest/uae.webp";
import ind from "../Assest/ind.webp";

const Footer = () => {
    return (
        <footer className="footer-container">
            {/* Top Section */}
            <div className="footer-top">
                <h2 className="company-name">Meridian Solutions</h2>
                <div className="social-icons">
                    <a href="https://www.youtube.com/@onmeridian" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="icon" />
                    </a>
                    <a href="ttps://www.instagram.com/onmeridian?igsh=MWw2cjgzZHpobzFuMg==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/company/on-meridian/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                    </a>
                </div>
            </div>


            {/* Middle Section - Locations */}
            <div className="footer-middle">
                <div className="location">
                    <div className="row">
                        <img src={sg} alt="Singapore Flag" className="flag" />
                        <h3>Singapore</h3>
                    </div>
                    <p>68 Circular Road #02-01 Singapore (049422)</p>
                </div>
                <div className="location">
                    <div className="row">
                        <img src={us} alt="US Flag" className="flag" />
                        <h3>US</h3>
                    </div>
                    <p>LLC1207 Delaware Ave #1983 Wilmington, DE 19808</p>
                </div>
                <div className="location">
                    <div className="row">
                        <img src={ind} alt="India Flag" className="flag" />
                        <h3>India</h3>
                    </div>
                    <p>
                        Tower 8, Office no. 1103 & 1104, 11th Floor, Spaze IT Tech Park,
                        Gurugram, India
                    </p>
                </div>
                <div className="location">
                    <div className="row">
                        <img src={uae} alt="UAE Flag" className="flag" />
                        <h3>UAE</h3>
                    </div>
                    <p>Unique World Business Centre, Al Karama, Dubai, UAE</p>
                </div>
            </div>


            {/* Bottom Section - Copyright */}
            <div className="footer-bottom">
                <p>Meridian Solutions Pvt. Ltd. © 2025. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
