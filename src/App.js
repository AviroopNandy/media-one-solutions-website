import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar.component";
// import { Fade } from "react-reveal";
import Cursor from "./components/Cursor/Cursor.component";
import Hamburger from "./components/Hamburger/Hamburger.component";
import HeroAnimation from "./components/HeroAnimation/HeroAnimation.component";
import Hero from "./components/Hero/Hero.component";
import About from "./components/About/About.component";
import Clients from "./components/Clients/Clients.component";
import Services from "./components/Services/Services.component";
import WhyMOS from "./components/WhyMOS/WhyMOS.component";
// import Footer from "./components/Footer/Footer.component";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Cursor /> */}
        {/* <Hamburger /> */}
        {/* <Hero /> */}
        <Route exact path="/">
          <Cursor />
          <Hamburger />
          <div className="abc">
            <HeroAnimation />
            <Hero />
          </div>
        </Route>
        <Route path="/about">
          <Cursor />
          <Hamburger />
          <About />
          {/* <Footer /> */}
        </Route>
        <Route path="/clients">
          <Cursor />
          <Hamburger />
          <Clients />
        </Route>
        <Route path="/services">
          <Cursor />
          <Hamburger />
          <Services />
        </Route>
        <Route path="/why-mos">
          <Cursor />
          <Hamburger />
          <WhyMOS />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
