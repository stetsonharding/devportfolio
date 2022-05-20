import React from "react";

import "../css/DataStructuresContainer.css";

import DataStructure from "../components/DataStructure";

function DataStructuresContainer() {
  return (
    <div className="data-structures-container">
      <div className="section-heading">
        <h1 className="heading">Data Structures</h1>
      </div>
      <h4 className="sub-heading" style={{ color: "#fff" }}>
        Click for implementation.
      </h4>
      <div data-aos="fade-up" className="data-structure">
        <DataStructure
          DataStructure="Linked List"
          link="https://github.com/stetsonharding/linked-list"
        />
        <DataStructure
          DataStructure="Stack"
          link="https://github.com/stetsonharding/stacks"
        />
        <DataStructure
          DataStructure="Queue"
          link="https://github.com/stetsonharding/Queue"
        />
        <DataStructure
          DataStructure="Hash Map"
          link="https://github.com/stetsonharding/hash-maps"
        />
        <DataStructure
          DataStructure="Binary Tree"
          link="https://github.com/stetsonharding/Binary-Search-Tree"
        />
      </div>
    </div>
  );
}

export default DataStructuresContainer;
