import React from "react";
import { Fade } from "react-reveal";
import yrf from "../../assets/images/clients/yrf.png";
import zee from "../../assets/images/clients/zee.jpg";
import viacom from "../../assets/images/clients/viacom.png";
import sony from "../../assets/images/clients/sony.png";
import rsvp from "../../assets/images/clients/rsvp.jpg";
import reliance from "../../assets/images/clients/reliance.png";
import tseries from "../../assets/images/clients/tseries.png";
import redchillies from "../../assets/images/clients/redchillies.png";
import eros from "../../assets/images/clients/eros.jpg";
import rajshri from "../../assets/images/clients/rajshri.jpg";
import balaji from "../../assets/images/clients/balaji.png";
import venus from "../../assets/images/clients/venus.jpg";
import times from "../../assets/images/clients/times.jpg";
import adf from "../../assets/images/clients/adf.jpg";
import pooja from "../../assets/images/clients/pooja.png";
import pvr from "../../assets/images/clients/pvr.jfif";
import pen from "../../assets/images/clients/pen.jpg";
import saregama from "../../assets/images/clients/saregama.jpg";

import "./Clients.style.css";

const Clients = () => {
  return (
    <>
      <section id="clients">
        <div className="clients-bg-title">
          <h1 className="title">Client</h1>
        </div>
        <div className="clients-container">
          <Fade left duration={2000}>
            <h3>
              <span>Our</span>
            </h3>
          </Fade>
          <Fade left duration={2500}>
            <h3>
              <span>Clients</span>
            </h3>
          </Fade>
          <Fade left duration={3500}>
            <div className="clients-desc">
              <div className="client">
                <img src={yrf} alt="" />
              </div>
              <div className="client">
                <img src={zee} alt="" />
              </div>
              <div className="client">
                <img src={viacom} alt="" />
              </div>
              <div className="client">
                <img src={sony} alt="" />
              </div>
              <div className="client">
                <img src={rsvp} alt="" />
              </div>
              <div className="client">
                <img src={reliance} alt="" />
              </div>
              <div className="client">
                <img src={tseries} alt="" />
              </div>
              <div className="client">
                <img src={redchillies} alt="" />
              </div>
              <div className="client">
                <img src={eros} alt="" />
              </div>
              <div className="client">
                <img src={rajshri} alt="" />
              </div>
              <div className="client">
                <img src={balaji} alt="" />
              </div>
              <div className="client">
                <img src={venus} alt="" />
              </div>
              <div className="client">
                <img src={times} alt="" />
              </div>
              <div className="client">
                <img src={adf} alt="" />
              </div>
              <div className="client">
                <img src={pooja} alt="" />
              </div>
              <div className="client">
                <img src={pvr} alt="" />
              </div>
              <div className="client">
                <img src={pen} alt="" />
              </div>
              <div className="client">
                <img src={saregama} alt="" />
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Clients;
