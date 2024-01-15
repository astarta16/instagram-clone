import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import React from "react";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={Container.md} padding={0}>
        <Box display={{ base: "none", md: "block" }}>
          <Image src="/auth.png" h={650} alt="Phone img"></Image>
        </Box>
        <VStack>
            
        </VStack>
      </Container>
    </Flex>
  );
};

export default AuthPage;
