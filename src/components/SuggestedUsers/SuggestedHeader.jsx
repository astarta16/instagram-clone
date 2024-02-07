import { Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";

function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} align={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a programmer" size={"lg"} src="/profilepic.png" />
        <Box fontSize={12} fontWeight={"bold"}>
          asaprogrammer_
        </Box>
      </Flex>
    </Flex>
  );
}

export default SuggestedHeader;
