import { Box, VStack, Image, Input } from "@chakra-ui/react";

const AuthForm = () => {
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
        </VStack>
      </Box>
    </>
  );
};

export default AuthForm;
