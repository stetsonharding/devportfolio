import React from "react";

import ProblemSolution from "../assets/ProblemSolution__.webp";
import "../css/AboutMeImage.css";

function AboutMeImage() {
  return (
    <img
      data-aos="fade-right"
      className="about-me-image"
      src={ProblemSolution}
      alt="Problem - Solution Puzzle Peices"
    />
  );
}

export default AboutMeImage;
