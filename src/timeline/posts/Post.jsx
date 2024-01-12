// import React from "react";
// import "./Post.css";
// import { Avatar } from "@mui/material";
// import {
//   BookmarkBorder,
//   ChatBubbleOutline,
//   FavoriteBorder,
//   MoreHoriz,
//   Telegram,
// } from "@mui/icons-material";

// function Post({ user, postImage, likes, timestamp }) {
//   const userInitial = user ? user.charAt(0).toUpperCase() : "?";

//   return (
//     <div className="post">
//       <div className="post_header">
//         <div className="post_headerAuthor">
//           <Avatar>{userInitial}</Avatar>
//           {user} * <span>{timestamp}</span>
//         </div>
//         <MoreHoriz />
//       </div>

//       <div className="post_image">
//         <img src={postImage} alt="Post visual content" />
//       </div>
//       <div className="post_footer">
//         <div className="post_footerIcons">
//           <div className="post_iconsMain">
//             <FavoriteBorder className="postIcon" />
//             <ChatBubbleOutline className="postIcon" />
//             <Telegram className="postIcon" />
//           </div>
//           <div className="post_iconSave">
//             <BookmarkBorder className="postIcon" />
//           </div>
//         </div>
//         Liked by {likes} people
//       </div>
//     </div>
//   );
// }

// export default Post;
