import React from "react";
import logo from "../../assets/images/logo/logo-black.PNG";

import "./Footer.style.css";

const Footer = () => {
    return (
        <>
            <footer className="site-footer text-center">
                <div className="container">
                    <div className="row">
                        <a href="localhost:3000">
                            <img src={ logo } className="site-footer-logo" alt="" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;