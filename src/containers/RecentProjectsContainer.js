import React from "react";

import "../css/RecentProjectsContainer.css";

function RecentProjectsContainer() {
  return (
    <div className="recent-projects-container">
      <div className="section-heading">
        {" "}
        <h1 className="heading">Recent Projects</h1>
      </div>

      <div className="recent-projects"></div>
    </div>
  );
}

export default RecentProjectsContainer;
