import { Box, VStack, Image, Input, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="/logo.png"
            h={24}
            cursor={"pointer"}
            alt="instagram logo"></Image>
          <Input placeholder="Email" fontSize={14} type="email"></Input>
          <Input placeholder="Password" fontSize={14} type="password"></Input>

          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"></Input>
          ) : null}

          <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
            {isLogin ? "Log in" : "Sign up"}
          </Button>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default AuthForm;
