import React from "react";

import "../css/RecentProjectsContainer.css";

import { RecentProjectData } from "../RecentProjectData/RecentProjectData.js";
import DataStructuresContainer from "./DataStructuresContainer";

import RecentProject from "../components/RecentProject";

function RecentProjectsContainer() {
  return (
    <div className="recent-projects-container">
      <div className="recent-project-heading-container">
        <h1 className="recent-project-heading">Recent Projects</h1>
      </div>

      <div data-aos="fade-right" className="recent-projects">
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
      <DataStructuresContainer />
    </div>
  );
}

export default RecentProjectsContainer;
