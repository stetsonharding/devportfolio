import React, { useState } from "react";

import "../css/RecentProject.css";

function RecentProject(props) {
  const [displayImgInfo, setDisplayImgInfo] = useState(false);

  //show/hide project description
  const hoverImage = (e) => {
    e.preventDefault();

    setDisplayImgInfo(!displayImgInfo);
  };

  return (
    <div className="recent-project-container">
      <div className="recent-project-img-container">
        <a target="_blank" rel="noreferrer" href={props.href}>
          <img
            key={props.id}
            className="project-img"
            onMouseEnter={(e) => hoverImage(e)}
            onMouseLeave={(e) => hoverImage(e)}
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </a>
        {displayImgInfo && (
          <p className="project-description">{props.description}</p>
        )}
      </div>
      <div className="recent-project-tech-stack"></div>
    </div>
  );
}

export default RecentProject;
