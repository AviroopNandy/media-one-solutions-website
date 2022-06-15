import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import { Fade } from "react-reveal";
import { fireConfetti } from "../../utils/confetti";
import whyMOSImg from "../../assets/images/why-mos.png";

import "./WhyMOS.style.css";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const someCallback = () => {
    setMessage1(
      "Extending audio campaigns to Digital platforms, City tours and Event coverages on-air"
    );
    callback();
  };

  const someCallback2 = () => {
    setMessage2("Audio trailers, National level campaigns and Jingles");
  };

  const someCallback3 = () => {
    setMessage3("Competitive Pricing");
  };

  const someCallback4 = () => {
    setMessage4(
      "Community building through Ideation, Special Content Integrations and Brand Engagement"
    );
  };

  const someCallback5 = () => {
    setMessage5("Strategic alliance with all radio stations across India");
    fireConfetti();
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        <div className="message-right">{message1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        <div className="message-left">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        <div className="message-right">{message3}</div>
      </div>
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle">
          4
        </div>
        <div className="message-left">{message4}</div>
      </div>
      <div id="timeline5" ref={timeline5} className="timeline" />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle">
          5
        </div>
        <div className="message-right">{message5}</div>
      </div>
    </div>
  );
};

const WhyMOS = () => {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <>
      <section id="why-mos">
        <div className="whyMos-bg-title">
          <h1 className="title">Why Us</h1>
        </div>
        <div className="whyMos-container">
          <Fade left duration={2000}>
            <h3>
              <span>Why</span>
            </h3>
          </Fade>
          <Fade left duration={2500}>
            <h3>
              <span>MOS</span>
            </h3>
          </Fade>
          <Fade left duration={3500}>
            <div className="whyMos-desc">
              <p className="mt-25">
                Although Radio is an integral part of film promotion, there is
                no specialized agency to take care of all your needs
              </p>
              <div className="image mt-25">
                {/* <img src={whyMOSImg} alt="" /> */}
                <TimelineObserver
                  initialColor="#e5e5e5"
                  fillColor="#ff8002"
                  handleObserve={(setObserver) => (
                    <Timeline
                      callback={onCallback}
                      className="timeline"
                      setObserver={setObserver}
                    />
                  )}
                />
                <div className="stub2">{message}</div>
              </div>
              <p className="mt-25">
                MOS comes with 45+ person years of in-depth experience in radio
                and film promotion, while helping radio grow its importance in
                marketing budgets
              </p>
              <p className="mt-25">
                MOS comes with 10+ years of experience in radio promotions for
                Bollywood, Hollywood and Regional films
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default WhyMOS;
