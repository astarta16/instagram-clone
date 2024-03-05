import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
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
          alignItems={"center"}
          w={"full"}>
          <Text fontSize={{ base: "sm", md: "lg" }}>programmer</Text>

          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "white" }}
              size={{ base: "xs", md: "sm" }}>
              Edit profile
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {" "}
              4
            </Text>
            Posts
          </Text>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {" "}
              123
            </Text>
            Followers
          </Text>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {" "}
              323
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            As a programmer
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
}

export default ProfileHeader;
