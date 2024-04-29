import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import "../css/RecentProject.css";

function RecentProject(props) {
  const [displayImgInfo, setDisplayImgInfo] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1500px)",
  });

  //hover controls for project description
  const handeMouseOver = () => {
    setDisplayImgInfo(true);
  };
  const handleMouseOut = () => {
    setDisplayImgInfo(false);
  };

  //Shows Project Description on tablets/mobile without hovering.
  useEffect(() => {
    isDesktopOrLaptop ? setDisplayImgInfo(false) : setDisplayImgInfo(true);
  }, [isDesktopOrLaptop]);

  return (
    <div className="recent-project-container">
      <div className="recent-project-img-container">
        <h3>{props.title}</h3>
        <a target="_blank" rel="noreferrer" href={props.href}>
          <img
            key={props.id}
            className="project-img"
            onMouseEnter={handeMouseOver}
            onMouseLeave={handleMouseOut}
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </a>
        {displayImgInfo && (
          <div 
          onMouseEnter={handeMouseOver}
          onMouseLeave={handleMouseOut}
         className="project-description"
          >
           {props.title === "Mockery" &&  <a target="_blank" href="https://www.veed.io/view/89bd9454-6fda-41f8-8e3a-f130548b1164?panel=download"><i>View Mockery Presentation </i></a>}
         
          <p>{props.description}</p>
       
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentProject;
