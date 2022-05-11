import React from "react";

import "../css/RecentProjectsContainer.css";

import RecentProject from "../components/RecentProject";

function RecentProjectsContainer() {
  return (
    <div className="recent-projects-container">
      <div className="section-heading">
        {" "}
        <h1 className="heading">Recent Projects</h1>
      </div>

      <div className="recent-projects">
        <RecentProject />
      </div>
    </div>
  );
}

export default RecentProjectsContainer;
