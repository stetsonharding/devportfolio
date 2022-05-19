import React, { useEffect } from "react";
import "../css/Hero.css";

import Aos from "aos";
import "aos/dist/aos.css";

import HeroBtns from "./HeroBtns";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div data-aos="fade-up" className="hero-container">
      <div className="hero">
        <pre>Hello,</pre>
        <pre id="hero-main">
          I'm <span className="name">Stetson</span>
        </pre>
        <p id="hero-sub">Front-End Developer - Problem Solver - Drone Pilot</p>
      </div>
      <HeroBtns reach="Contact Me" />
    </div>
  );
}

export default Hero;
