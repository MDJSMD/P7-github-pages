//Importation des modules React et de l'Hook useState pour gérer l'état de l'application
import React, { useState, useEffect } from "react";
import LOGOKASA from "../assets/LOGO.png";

const Header = () => {
    const [activeLink, setActiveLink] = useState("/");
    useEffect(() => {
        setActiveLink(window.location.pathname);
    }, [window.location.pathname]);

    return (
        <header>
            <img src={LOGOKASA} alt="logo-kasa" />
            <nav>
                <a href="/" className={activeLink === "/" ? "active" : ""} onClick={() => setActiveLink("/")}>Accueil</a>
                <a href="/about" className={activeLink === "/about" ? "active" : ""} onClick={() => setActiveLink("/about")}>A propos</a>
            </nav>
        </header>
    );
};

export default Header;
