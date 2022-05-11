import React, { useState } from "react";

import "../css/RecentProject.css";

import ImageShop from "../assets/recentProjects/imageShop.webp";

function RecentProject() {
  const [displayImgInfo, setDisplayImgInfo] = useState(true);
  return (
    <div className="recent-project-container">
      <div className="recent-project-image">
        <img
          className="project-image"
          src={ImageShop}
          alt="Mock up"
          style={{ height: "250px", width: "350px" }}
        />
      </div>
      <div classname="recent-project-tech-stack"></div>
    </div>
  );
}

export default RecentProject;
