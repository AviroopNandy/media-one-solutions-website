import React, { useState } from "react";
import logo from "../../assets/images/logo/logo-black.PNG";

import "./Navbar.style.css";

const Navbar = () => {
    const [addClass, setAddClass] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);

    // var classes = [""];

    const toggleHamburger = () => {
        setAddClass(!addClass);
        setShowSidebar(!showSidebar);
        // if(showSidebar) {
        //     classes.push("active")
        // } else {
        //     classes.pop("active")
        // }
    }
    
    return (
        <>
            <div className="navbar">
                {/* Logo */}
                <div className="logo">
                    <img src={ logo } alt="" />
                </div>
                {/* Hamburger Menu */}
                { addClass ? (
                    <div className="hamburger hamburger-container" onClick={() => toggleHamburger()}>
                        <div className="stick stick-1 close"></div>
                        <div className="stick stick-2 close"></div>
                        <div className="stick stick-3 close"></div>
                    </div>
                ) : (
                    <div className="hamburger hamburger-container" onClick={() => toggleHamburger()}>
                        <div className="stick stick-1 open"></div>
                        <div className="stick stick-2 open"></div>
                        <div className="stick stick-3 open"></div>
                    </div>
                ) }
                {/* { !showSidebar ? (
                    <div className="sidebar inactive">
                        <ul className="menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Our Team</a></li>
                            <li><a href="/">Our Services</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                        <ul className="social-icons">
                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                ) : (
                    <div className="sidebar active">
                        <ul className="menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Our Team</a></li>
                            <li><a href="/">Our Services</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                        <ul className="social-icons">
                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                ) } */}
            </div>
        </>
    );
}

export default Navbar;