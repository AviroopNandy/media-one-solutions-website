import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import {
  BsPeopleFill,
  BsHouseFill,
  BsPersonCheckFill,
  BsQuestionLg,
} from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

import "./Hamburger.style.css";

const Hamburger = () => {
  // const [addClass, setAddClass] = useState(true);
  // const [showSidebar, setShowSidebar] = useState(false);

  // const toggleHamburger = () => {
  //   setAddClass(!addClass);
  //   setShowSidebar(!showSidebar);
  // };
  return (
    <>
      <Menu right width={400}>
        <a className="menu-item-custom" href="/">
          <div className="menu-item-element">
            <BsHouseFill />
            <span>Home</span>
          </div>
        </a>
        <a className="menu-item-custom" href="/about">
          <div className="menu-item-element">
            <BsPersonCheckFill />
            <span>About Us</span>
          </div>
        </a>
        <a className="menu-item-custom" href="/clients">
          <div className="menu-item-element">
            <BsPeopleFill />
            <span>Clients</span>
          </div>
        </a>
        <a className="menu-item-custom" href="/services">
          <div className="menu-item-element">
            <AiFillSetting />
            <span>Services</span>
          </div>
        </a>
        <a className="menu-item-custom" href="/why-mos">
          <div className="menu-item-element">
            <BsQuestionLg />
            <span>Why MOS</span>
          </div>
        </a>
        {/* <Hamburger /> */}
      </Menu>

      {/* {addClass ? (
        <div
          className="hamburger hamburger-container"
          onClick={() => toggleHamburger()}
        >
          <div className="stick stick-1 close"></div>
          <div className="stick stick-2 close"></div>
          <div className="stick stick-3 close"></div>
        </div>
      ) : (
        <div
          className="hamburger hamburger-container"
          onClick={() => toggleHamburger()}
        >
          <div className="stick stick-1 open"></div>
          <div className="stick stick-2 open"></div>
          <div className="stick stick-3 open"></div>
        </div>
      )} */}
    </>
  );
};

export default Hamburger;
