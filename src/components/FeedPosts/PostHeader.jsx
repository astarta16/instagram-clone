import { Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";

const PostHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="/img1.png" alt="user profile" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          programmer
          <Box color={"gray.500"}> • 1w</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostHeader;
