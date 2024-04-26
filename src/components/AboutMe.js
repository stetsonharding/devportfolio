import React from "react";

import "../css/AboutMe.css";
import "../css/HeroBtns.css";

import DownloadResume from "../downloadFiles/Stetson_Harding_Resume.pdf";

function AboutMe() {
  return (
    <div className="container">
      <div className="about-heading-container">
        <p className="about-heading">
          <span className="about">About</span> me
        </p>
      </div>
      <p className="introduction">
      I'm a Front End Developer based in Seattle, Washington, dedicated to crafting solutions that harness the power of cutting-edge technologies. My focus is on delivering responsive, scalable, and user-friendly experiences. With a Bachelor's degree in Computer Information Systems, specializing in Web Development Administration, I bring a solid foundation to every project I undertake.
      </p>
      <div className="about-btns-container">
        {/* <button className="about-btn view-work">View My Work</button> */}
        <a className="about-btn downloadCV" href={DownloadResume} download>
          Download CV
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
