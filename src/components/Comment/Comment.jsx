import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Comment = ({ createAt, username, profilePic, text }) => {
  return <Flex gap={4}>
    <Avatar src={profilePic}  name={username} size={"sm"}/>
    <Flex direction={"column"}>
      <Flex gap={2}>
        <Text fontWeight={"bold"}>
          {username}
        </Text>
      </Flex>
    </Flex>
     </Flex>
};

export default Comment;
