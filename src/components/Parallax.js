import React from "react";

import "../css/Parallax.css";
import { useMediaQuery } from "react-responsive";

export default function Parallax(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 600px)",
  });
  return (
    <div
      className="parallax_background"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      {isDesktopOrLaptop && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>
            <i>Connecting Dots Until the Problem is Solved.</i>
          </h4>
        </div>
      )}
      {props.children}
    </div>
  );
}
