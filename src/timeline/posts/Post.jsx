import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, MoreHoriz, Telegram } from "@mui/icons-material";

function Post() {
  return (
    <div className="post">
      <div className="post_header">
        <div className="post_headerAuthor">
          <Avatar>R</Avatar>
          redian_ * <span>12h</span>
        </div>
        <MoreHoriz />
      </div>

      <div className="post_image">
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="post_footer">
  <div className="post_footerIcons"> 
    <div className="post_iconsMain">
      <FavoriteBorder className="postIcon"/>
      <ChatBubbleOutline className="postIcon"/>
      <Telegram className="postIcon"/>
    </div>
    <div className="post_iconSave">
      <BookmarkBorder className="postIcon" />
    </div>
  </div>
  liked by 21
</div>
    </div>
  );
}

export default Post;
