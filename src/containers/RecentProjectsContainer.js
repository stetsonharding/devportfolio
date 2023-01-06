import React from "react";

import "../css/RecentProjectsContainer.css";

import { RecentProjectData } from "../RecentProjectData/RecentProjectData.js";

import RecentProject from "../components/RecentProject";

function RecentProjectsContainer({ recentProjectsRef }) {
  return (
    <div className="recent-projects-container" ref={recentProjectsRef}>
      <div
        className="recent-project-heading-container"
        id="recent-projects-href"
      >
        <h1 className="recent-project-heading">Recent Projects</h1>
      </div>

      <div data-aos="fade-up" className="recent-projects">
        {RecentProjectData.map((recentProject) => {
          return (
            <RecentProject
              key={recentProject.id}
              imgSrc={recentProject.Imgsrc}
              imgAlt={recentProject.Imgalt}
              description={recentProject.description}
              href={recentProject.href}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecentProjectsContainer;
