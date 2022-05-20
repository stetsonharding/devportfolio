import React from "react";

import "../css/HeroBtns.css";

function HeroBtns(props) {
  return (
    <div className="hero-btns-container">
      <button
        className="hero-btn"
        id="btn-work"
        onClick={() => {
          props.handleClick(props.recentProjectsRef);
        }}
      >
        View My Work
      </button>
      <button
        className="hero-btn"
        id="btn-contact"
        onClick={() => {
          props.handleClick(props.contactRef);
        }}
      >
        Get In Touch
      </button>
    </div>
  );
}

export default HeroBtns;
