import React from "react";
import "../css/Hero.css";

import HeroBtns from "./HeroBtns";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <pre id="hero-main">Hello, I'm Stetson Harding</pre>
        <pre id="hero-sub">
          Front-End Developer - Problem Solver - Drone Pilot
        </pre>
      </div>
      <HeroBtns />
    </div>
  );
}

export default Hero;
