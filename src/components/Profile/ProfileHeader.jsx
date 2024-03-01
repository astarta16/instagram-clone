import { Avatar, AvatarGroup, Flex, VStack } from "@chakra-ui/react";
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

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}></Flex>
      </VStack>
    </Flex>
  );
}

export default ProfileHeader;
