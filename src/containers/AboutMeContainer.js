import React from "react";

import "../css/AboutMeContainer.css";
import AboutMeImage from "../components/AboutMeImage";
import AboutMe from "../components/AboutMe";

function AboutMeContainer() {
  return (
    <div className="about-me-container">
      <AboutMeImage />
      <AboutMe />
    </div>
  );
}

export default AboutMeContainer;
