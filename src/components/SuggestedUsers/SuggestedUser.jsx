import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import React from "react";

const SuggestedUser = ({ followers, name, avatar }) => {
  return (
    <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"} />
        <VStack spacing={2}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
        </VStack>
      </Flex>
      <Button></Button>
    </Flex>
  );
};

export default SuggestedUser;
