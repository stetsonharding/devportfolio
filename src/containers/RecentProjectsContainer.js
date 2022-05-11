import React from "react";

import "../css/RecentProjectsContainer.css";

import { RecentProjectData } from "../RecentProjectData/RecentProjectData.js";

import RecentProject from "../components/RecentProject";

function RecentProjectsContainer() {
  return (
    <div className="recent-projects-container">
      <div className="section-heading">
        {" "}
        <h1 style={{ color: "black" }} className="heading">
          Recent Projects
        </h1>
      </div>

      <div
        className="recent-projects"
        style={{
          display: "flex",
        }}
      >
        {RecentProjectData.map((recentProject) => {
          return (
            <RecentProject
              imgSrc={recentProject.Imgsrc}
              imgAlt={recentProject.Imgalt}
              description={recentProject.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecentProjectsContainer;
