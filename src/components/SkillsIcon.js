import React from "react";

import "../css/SkillsIcon.css";

function SkillsIcon(props) {
  return (
    <div className="Skill-icon-container">
      <div className="icon">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="icon-name-container">
        <pre>{props.name}</pre>
      </div>
    </div>
  );
}

export default SkillsIcon;
