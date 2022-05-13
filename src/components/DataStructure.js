import React from "react";

import "../css/DataStructure.css";

function DataStructure(props) {
  return (
    <div className="data-stucture-container">
      <a
        className="data-structure-link"
        target="_blank"
        rel="noreferrer"
        href={props.link}
      >
        <span className="data-structure-name">{props.DataStructure}</span>
      </a>
    </div>
  );
}

export default DataStructure;
