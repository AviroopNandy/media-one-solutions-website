import React from "react";
import { Fade } from "react-reveal";

import "./About.style.css";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-bg-title">
          <h1 className="title">About</h1>
        </div>
        <div className="about-container">
          <Fade left duration={2000}>
            <h3>
              <span>Media</span>
            </h3>
          </Fade>
          <Fade left duration={2500}>
            <h3>
              <span>One</span>
            </h3>
          </Fade>
          <Fade left duration={3000}>
            <h3>
              <span>Solutions</span>
            </h3>
          </Fade>
          <Fade left duration={4000}>
            <p className="about-desc">
              Media One Solutions is a specialized marketing firm with 45+
              person years of experience across Film Distribution, Radio
              Promotions and Digital Services.
              <br />
              <br />
              Started in 2009, Media One Solutions has transformed into a
              pioneer in the space of radio promotions and has now diversified
              to areas of digital associations, thanks to their strong ties with
              Gaana, and AdVoice along with new verticals in brand
              collaborations and in-film placements.
              <br />
              <br />
              Today, the organisation handles more than 75% of radio business
              for films and 90% of all Marathi film promotions in the radio
              space.
            </p>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default About;
