import React from "react";

import "../css/AboutMe.css";
import "../css/HeroBtns.css";

import DownloadResume from "../downloadFiles/Stetson_Harding_Resume_2022.pdf";

function AboutMe() {
  return (
    <div className="container">
      <div className="about-heading-container">
        <p className="about-heading">
          <span className="about">About</span> me
        </p>
      </div>
      <p className="introduction">
        Front End Developer based out of Seattle Washington. I am dedicated to
        developing solutions that leverage on best practice technologies to
        deliver responsive, scalable, user friendly experiences. I have a
        Bachelor's in Computer Information Systems specializing in Web
        Development Administration.
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
