import React from "react";

import "../css/AboutMe.css";
import HeroBtns from "../components/HeroBtns";

function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-heading">
        <p className="heading">
          <span>About</span> me
        </p>
      </div>
      <p className="introduction">
        My name is Stetson Harding, I live in Seattle Washington and have a huge
        passion for computers, programming, and Web Development. I graduated
        from DeVry University with my BS in Computer Information Systems with a
        specialization in Web Development Administration.
      </p>
      <div className="about-btns">
        <HeroBtns reach="Download CV" />
      </div>
    </div>
  );
}

export default AboutMe;
