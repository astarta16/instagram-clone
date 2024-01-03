import React, { useState } from "react";
import "./Timeline.css";
import Suggestion from "./Sugesstion";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "nini",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 15,
      timespamp: "1d",
    },
    {
      user: "tata",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 100,
      timespamp: "4d",
    },
    {
      user: "sandro",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 43,
      timespamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline_posts">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="timeline_right">
        <Suggestion />
      </div>
    </div>
  );
}

export default Timeline;
