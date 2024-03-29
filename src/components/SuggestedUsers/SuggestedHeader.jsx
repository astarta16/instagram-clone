import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
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
      as={RouterLink}
      to={"/auth"}
      fontSize={14}
      fontWeight={"medium"}
      color={"blue.400"}
      style={{textDecoration: "true"}}
      cursor={"point"}
      
      >Log out</Link>
    </Flex>
  );
}

export default SuggestedHeader;
