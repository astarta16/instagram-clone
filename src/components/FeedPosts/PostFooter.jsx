import { Flex, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { NotificationLogo, UnlikeLogo } from "../../assets/constants";

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(liked - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  return (
    <>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
        <Box onClick={handleLike} cursor={"pointer"}>
          {!liked ? <NotificationLogo /> : <UnlikeLogo />}
        </Box>
      </Flex>
    </>
  );
};

export default PostFooter;
