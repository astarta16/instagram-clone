import { Avatar, AvatarGroup, Flex } from "@chakra-ui/react";
import React from "react";

function ProfileHeader() {
  return (
    <Flex gap={{ base: 4, sm: 10 }}>
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifyContent={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}>
        <Avatar name="As a Programmer" src="/profilepic.png"></Avatar>
      </AvatarGroup>

      
    </Flex>
  );
}

export default ProfileHeader;
