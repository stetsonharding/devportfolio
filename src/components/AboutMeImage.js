import React from "react";

import ProblemSolution from "../assets/ProblemSolution__.webp";
import "../css/AboutMeImage.css";

function AboutMeImage() {
  return (
    <img
      className="about-me-image"
      src={ProblemSolution}
      alt="Problem - Solution Puzzle Peices"
    />
  );
}

export default AboutMeImage;
