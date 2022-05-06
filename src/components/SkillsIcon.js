import React from "react";

function SkillsIcon(props) {
  return (
    <div className="Skill-icon">
      <div className="icon">
        <img
          style={{ width: "95px", height: "95px" }}
          src={props.src}
          alt={props.alt}
        />
      </div>
      <div className="icon-name" style={{ textAlign: "center" }}>
        <pre
          style={{
            padding: "0",
            margin: "5px",
            fontWeight: "bold",
            fontSize: "12px",
            fontStyle: "italic",
          }}
        >
          HTML
        </pre>
      </div>
    </div>
  );
}

export default SkillsIcon;
