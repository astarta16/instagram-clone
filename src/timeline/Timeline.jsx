import React from "react";
import "./Timeline.css";
import Suggestion from "./Sugesstion";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline_left">timeline</div>
      <div className="timeline_right">
        <Suggestion />
      </div>
    </div>
  );
}

export default Timeline;
