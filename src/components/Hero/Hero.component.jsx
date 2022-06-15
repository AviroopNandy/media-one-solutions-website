import React from "react";
import Fade from "react-reveal";
import logo from "../../assets/images/logo/logo-black-withoutbg.png";
import MouseScroll from "../MouseScroll/MouseScroll.component";

import "./Hero.style.css";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="home">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/* <div className="name">
            <Fade top duration={3000}>
              <h3>Media One Solutions</h3>
            </Fade>
          </div> */}
          {/* <a id="play-video" className="video-play-button">
            <span></span>
          </a>
          <div id="video-overlay" className="video-overlay">
            <a className="video-overlay-close"></a>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
