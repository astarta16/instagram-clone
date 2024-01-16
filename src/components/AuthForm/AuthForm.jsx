import { Box, VStack,  Image } from "@chakra-ui/react";

const AuthForm = () => {
  return <>
  <Box border={"1px solid gray"} borderRadius={4} padding={5}>
    <VStack spacing={4}>
      <Image  src= '/logo.png' h={24} cursor ={"pointer"} alt = "instagram logo"></Image>

    </VStack>
  </Box>
  </>
};

export default AuthForm;
