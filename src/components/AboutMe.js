import React from "react";

import "../css/AboutMe.css";
import "../css/HeroBtns.css";

import DownloadResume from "../downloadFiles/Resume2022.pdf";

function AboutMe() {
  return (
    <div data-aos="fade-left" className="container">
      <div className="about-heading-container">
        <p className="about-heading">
          <span className="about">About</span> me
        </p>
      </div>
      <p className="introduction">
        My name is Stetson Harding, I live in Seattle Washington and have a huge
        passion for computers, programming, and Web Development. I graduated
        from DeVry University with my BS in Computer Information Systems with a
        specialization in Web Development Administration.
      </p>
      <div className="about-btns-container">
        <button className="about-btn view-work">View My Work</button>
        <a className="about-btn downloadCV" href={DownloadResume} download>
          Download CV
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
