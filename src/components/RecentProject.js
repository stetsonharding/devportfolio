import React, { useState } from "react";

import "../css/RecentProject.css";

import ImageShop from "../assets/recentProjects/imageShop.webp";

function RecentProject(props) {
  const [displayImgInfo, setDisplayImgInfo] = useState(false);

  const hoverImage = (e) => {
    e.preventDefault();

    setDisplayImgInfo(!displayImgInfo);
  };

  return (
    <div className="recent-project-container" style={{ width: "100%" }}>
      <div className="recent-project-image">
        <img
          className="project-image"
          onMouseEnter={(e) => hoverImage(e)}
          onMouseLeave={(e) => hoverImage(e)}
          src={props.imgSrc}
          alt={props.imgAlt}
          style={{ height: "250px", width: "350px" }}
        />
        {displayImgInfo && (
          <p
            style={{
              color: "black",
              textAlign: "center",
              padding: "0",
              marginTop: "0",
            }}
          >
            {props.description}
          </p>
        )}
      </div>
      <div classname="recent-project-tech-stack"></div>
    </div>
  );
}

export default RecentProject;
