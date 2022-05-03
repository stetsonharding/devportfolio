import React from "react";
import "../css/Hero.css";

import HeroBtns from "./HeroBtns";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <pre>Hello,</pre>
        <pre id="hero-main">
          I'm <span id="name">Stetson</span>
        </pre>
        <pre id="hero-sub">
          Front-End Developer - Problem Solver - Drone Pilot
        </pre>
      </div>
      <HeroBtns />
    </div>
  );
}

export default Hero;
