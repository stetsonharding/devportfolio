import React from "react";

import "../css/HeroBtns.css";

function HeroBtns(props) {
  return (
    <div className="hero-btns-container">
      <button className="hero-btn" id="btn-work">
        View My Work
      </button>
      <button className="hero-btn" id="btn-contact">
        {props.reach}
      </button>
    </div>
  );
}

export default HeroBtns;
