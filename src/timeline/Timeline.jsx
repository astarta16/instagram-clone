import React from "react";
import "./Timeline.css";
import Suggestion from "./Sugesstion";
import Post from "./posts/Post";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline_posts">
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
      <div className="timeline_right">
        <Suggestion />
      </div>
    </div>
  );
}

export default Timeline;
