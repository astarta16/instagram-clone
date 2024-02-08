import { Avatar, Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import {Link as RouterLink} from 'react-router-dom'

function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} align={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a programmer" size={"lg"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          asaprogrammer_
        </Text>
      </Flex>
      <Link
      
      ></Link>
    </Flex>
  );
}

export default SuggestedHeader;
