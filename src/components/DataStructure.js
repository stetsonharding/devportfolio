import React from "react";

function DataStructure(props) {
  return (
    <div className="data-stucture-container">
      <a
        target="_blank"
        rel="noreferrer"
        href={props.link}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <span
          style={{
            fontSize: "1.3rem",
            color: "#ff748a",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          {props.DataStructure}
        </span>
      </a>
    </div>
  );
}

export default DataStructure;
