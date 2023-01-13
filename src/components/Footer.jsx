import React from 'react';
import logo from "../assets/LOGO-footer.png";

const Footer = () => (
    <footer className="footer-container">
        <img src={logo} alt="kasa-logo" className="footer-logo" />
        <p className="footer-copyright">{`\u00A9`} 2020 Kasa. All rights reserved</p>
    </footer>
);

export default Footer;